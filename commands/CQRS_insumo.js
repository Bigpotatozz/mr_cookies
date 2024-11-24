const { Dao_insumo } = require("../DAO/DAO_insumo");

class Create_insumo {
    constructor(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad){
        this.nombre = nombre;
        this.precio = precio;
        this.tipo_insumo = tipo_insumo;
        this.tipo_unidad = tipo_unidad;
        this.cantidad = cantidad;
        this.caducidad = caducidad;
    }


    async create_insumo(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad){
        try{

            const dao_insumo = new Dao_insumo();
            const insumo =  dao_insumo.create_insumo(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad);
            return insumo;
        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }
    }
}


class Update_insumo{
    constructor(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad){
        this.nombre = nombre;
        this.precio = precio;
        this.tipo_insumo = tipo_insumo;
        this.tipo_unidad = tipo_unidad;
        this.cantidad = cantidad;
        this.caducidad = caducidad;
    }


    async update_insumo(data = {}, id_insumo){
        try{

            const dao_insumo = new Dao_insumo();
            const insumo = await dao_insumo.update_insumo(data, id_insumo);
            return insumo;

        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }
    }

}


class Add_cantidad{
    constructor(cantidad){
        this.cantidad = cantidad;
    }

    async update_stock(cantidad, id_insumo){
        try{

            const dao_insumo = new Dao_insumo();
            const insumo = await dao_insumo.add_stock(cantidad, id_insumo);
            return insumo;

        }catch(e){
            console.log(e);
            throw new Error(e.message);
        }
    };
}

module.exports = {Create_insumo, Update_insumo, Add_cantidad}