const { Dao_galleta } = require("../DAO/DAO_galleta");

class Create_Galleta {

    constructor(nombre,cantidad, caducidad, descripcion, costo_produccion, precio_venta, id_receta){
        this.nombre = nombre;
        this.caducidad = caducidad;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo_produccion = costo_produccion;
        this.precio_venta = precio_venta;
        this.id_receta = id_receta;
    }



    async create_galleta(nombre,cantidad, caducidad, descripcion, costo_produccion,precio_venta, id_receta){
        try{    

            const dao_galleta = new Dao_galleta();
            const created_cookie = await dao_galleta.create_galleta(nombre,cantidad,caducidad, descripcion, costo_produccion,precio_venta, id_receta);
            return created_cookie;

        }catch(e){
            throw new Error(e.message);
        }
    }

}

class Update_Galleta {

    constructor(nombre_galleta){
        this.nombre_galleta = nombre_galleta;
    }


    async update_galleta(nombre_galleta, id_galleta){
        try{
            const dao_galleta = new Dao_galleta();
            const edited_cookie = await dao_galleta.editar_galleta(nombre_galleta, id_galleta);

            return edited_cookie;

        }catch(e){
            throw new Error(e.message);
        }
    }

}



module.exports = {Create_Galleta, Update_Galleta}