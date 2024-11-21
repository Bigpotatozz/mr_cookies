const { Galleta } = require("../models/galleta.model");

class Dao_galleta {


    async create_galleta(nombre_galleta, cantidad, caducidad, descripcion, costo_produccion, precio_venta, id_receta){

        try{

            const galleta = new Galleta();

            
            const created_cookie = await galleta.model.create({nombre: nombre_galleta,
                                                                cantidad: cantidad,
                                                                caducidad : caducidad,
                                                                descripcion: descripcion,
                                                                costo_produccion: costo_produccion,
                                                                precio_venta: precio_venta,
                                                                id_receta_fk: id_receta});

            return created_cookie;


        }catch(e){
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


    async obtener_galletas(){
        try{

            const galleta = new Galleta();
            const cookies = await galleta.model.findAll();
            return cookies;
        }catch(e){
            throw new Error(e.message);
        }
    }

}



module.exports = {Dao_galleta}