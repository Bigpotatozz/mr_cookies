const { Op } = require("sequelize");
const { db_connection } = require("../config/connection");
const { Detalle_receta } = require("../models/detalle_receta.model");
const { Galleta } = require("../models/galleta.model");
const { Insumo } = require("../models/insumo.model");

class Dao_galleta {


    async create_galleta(id_galleta){

        const transaction = await db_connection.transaction();
        try{

            
            const galleta = new Galleta();
            const detalle_receta = new Detalle_receta();
            let insumo = new Insumo();
            let lote = 24;

            const match_galleta = await galleta.model.findOne({where: {id_galleta: id_galleta}, transaction: transaction});

            if(!match_galleta){
                throw new Error('La galleta no existe');
            }

            const receta = await detalle_receta.model.findAll({where: {id_galleta_fk: id_galleta}, transaction: transaction});

            for(let supply of receta){

               const match = await insumo.model.findByPk(supply.id_insumo_fk, {lock: true, transaction: transaction});
               let insumo_cantidad = supply.cantidad * lote;
                
               if(!match){
                   throw new Error('El insumo no existe');
                }

                if(insumo_cantidad > match.cantidad){
                    throw new Error('No hay suficiente insumo');
                }


                await match.update({cantidad: match.cantidad - insumo_cantidad},{transaction: transaction});
            }

            await match_galleta.update({cantidad: match_galleta.cantidad + lote, estatus: 'OK'}, {transaction: transaction});

            transaction.commit();

            return receta;




        }catch(e){
            console.log(e);
            transaction.rollback();
            throw new Error(e.message);
        }
    }


    async editar_galleta(nombre_galleta, id_galleta){
        try{

            const galleta = new Galleta();
            const edited_cookie = await galleta.model.update({nombre: nombre_galleta},{where: {id_galleta: id_galleta}});

            return edited_cookie;

        }catch(e){
            throw new Error(e.message);
        }
    }

    async update_estatus_galleta(id_galleta, estatus){
        try{

            const galleta = new Galleta();
            const edited_cookie = await galleta.model.update({estatus: estatus},{where: {id_galleta: id_galleta}});
            return edited_cookie;

        }catch(e){
            throw new Error(e.message);
        }
    }


    async obtener_galletas(){
        try{

            const galleta = new Galleta();
            const cookies = await galleta.model.findAll();
            return cookies;
        }catch(e){
            throw new Error(e.message);
        }
    }

    async get_production(){
        try{

            const galleta = new Galleta();
            const production = await galleta.model.findAll({where: {estatus: {[Op.in]: ['preparacion', 'horneado', 'enfriando']}}});
            if(production.length === 0){
                throw new Error('No hay produccion en curso');
            }
            return production;
            
        }catch(e){
            throw new Error(e.message);
        }
    }

}



module.exports = {Dao_galleta}