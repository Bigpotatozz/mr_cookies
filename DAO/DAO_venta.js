const { db_connection } = require("../config/connection");
const { Detalle_venta } = require("../models/detalle_venta.model");
const { Galleta } = require("../models/galleta.model");
const { Venta } = require("../models/venta.model");

class Dao_venta {


    async create_venta(productos = []) {
        const transaction = await db_connection.transaction();
        try {
            const venta = new Venta();
            const detalle_venta = new Detalle_venta();
            const galleta = new Galleta();
    
            let total = 0;
    
        
            for (let producto of productos) {
                const galleta_data = await galleta.model.findOne({
                    where: { id_galleta: producto.id_galleta }
                }, { transaction: transaction });
    

                if (!galleta_data) {
                    throw new Error(`Producto con ID ${producto.id_galleta} no encontrado`);
                }
    
                total += galleta_data.precio_venta * producto.cantidad;
    
         
                if (galleta_data.cantidad < producto.cantidad) {
                    throw new Error(`No hay suficiente stock para el producto ${producto.id_galleta}`);
                }
    
                await galleta_data.update({ cantidad: galleta_data.cantidad - producto.cantidad }, { transaction: transaction });
            }
    
 
            let created_venta = await venta.model.create({ fecha_venta: new Date(), total: total }, { transaction: transaction });

    

            for (let producto of productos) {
               let detalle =  await detalle_venta.model.create({
                    id_galleta_fk: producto.id_galleta,
                    id_venta_fk: created_venta.id_venta,
                    tipo_unidad: producto.tipo_unidad,
                    cantidad: producto.cantidad
                }, { transaction: transaction });


                console.log(detalle)
            }
    
  

            await transaction.commit();
            return 'Venta realizada con éxito';
    
        } catch (e) {
            console.log('Error durante la venta:', e);
            await transaction.rollback();
            throw new Error(e.message);
        }
    }
    


    obtener_ventas =  async() => {
        try{

            const venta = new Venta();
            const ventas = await venta.model.findAll();
            return ventas;

        }catch(e){
            throw new Error(e.message);
        }
    }



};


module.exports = { Dao_venta }

