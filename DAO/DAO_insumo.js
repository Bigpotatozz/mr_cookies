const { Insumo } = require("../models/insumo.model");

class Dao_insumo {

    async create_insumo(nombre,precio,tipo_insumo,tipo_unidad, cantidad, caducidad){
        try{

            const insumo = new Insumo();

            const new_insumo = await insumo.model.create({
                nombre: nombre,
                precio: precio,
                tipo_insumo: tipo_insumo,
                tipo_unidad: tipo_unidad,
                cantidad: cantidad,
                caducidad: caducidad
            });
            return 'insumo creado correctamente';


        }catch(error){
            console.log(error)
            throw new Error(e.message);
        }
    }


    async update_insumo(data = {}, id_insumo){

        try{
            data = data.data;
            console.log(data);
            const insumo = new Insumo();

            const match_insumo = await insumo.model.findOne({where: {id_insumo: id_insumo}});
            if(!match_insumo){
                throw new Error('insumo no encontrado');
            }

            const updated_insumo = await match_insumo.update(data);

            console.log(updated_insumo);

            return 'insumo actualizado correctamente';


        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }   
    }

    async add_stock(cantidad, id_insumo){
        try{

            const insumo = new Insumo();

            const insumo_match = await insumo.model.findOne({where: {id_insumo: id_insumo}});

            if(!insumo_match){
                throw new Error('insumo no encontrado');
            }

            const add_stock = await insumo_match.update({cantidad: insumo_match.cantidad + cantidad});


            return 'stock agregado correctamente'

        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }
    }

    async get_insumos(){
        try{

            const insumo = new Insumo();
            const insumos = await insumo.model.findAll({});
            return insumos;

        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }
    }

}

module.exports = {Dao_insumo}