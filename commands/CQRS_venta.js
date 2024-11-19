const { Dao_venta } = require("../DAO/DAO_venta");

class Create_Venta{

    constructor(productos){

        if (!Array.isArray(productos)) {
            throw new Error("El parámetro productos debe ser un arreglo.");
        }

    }



    async create_venta(productos = []){
        try{

            const dao_venta = new Dao_venta();

            const venta = await dao_venta.create_venta(productos);

            return venta;



        }catch(e){
            throw new Error(e.message);
        }
    }


}


module.exports = {Create_Venta};