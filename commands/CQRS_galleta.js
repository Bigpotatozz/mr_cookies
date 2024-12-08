const { Dao_galleta } = require("../DAO/DAO_galleta");

class Create_Galleta {

    constructor(id_galleta){
        this.id_galleta = id_galleta;
    }



    async create_galleta(id_galleta){
        try{    

            const dao_galleta = new Dao_galleta();
            const created_cookie = await dao_galleta.create_galleta(id_galleta);
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

class Update_estatus_galleta {
    constructor(estatus){
        this.estatus = estatus;
    }


    async update_estatus_galleta(estatus, id_galleta){
        try{
            const dao_galleta =  new Dao_galleta();
            const edited_cookie =  await dao_galleta.update_estatus_galleta(id_galleta, estatus);

            return edited_cookie;
            


        }catch(e){
            throw new Error(e.message);
        }
    }

}



module.exports = {Create_Galleta, Update_Galleta, Update_estatus_galleta}