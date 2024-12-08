const { Update_estatus_galleta } = require("../commands/CQRS_galleta");
const { Dao_galleta } = require("../DAO/DAO_galleta");

const update_estatus = async(req, res) => {
    const {id_galleta} =  req.params;
    const {estatus} = req.body;

    try{

        const cqrs = new Update_estatus_galleta(estatus);
        const edited_cookie = await cqrs.update_estatus_galleta(estatus, id_galleta);

        return res.status(200).json({
            message: "Galleta enviada a produccion",
            cookie: edited_cookie
        });

    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }

};

const get_production = async(req, res) => {

    try{

        const dao_produccion = new Dao_galleta();
        const production = await dao_produccion.get_production();
        
        return res.status(200).json({
            message: "Production obtained successfully",
            production: production
        });

    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};



module.exports = {update_estatus, get_production}