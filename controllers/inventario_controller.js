const { Create_Galleta, Update_Galleta } = require("../commands/CQRS_galleta");
const { Dao_galleta } = require("../DAO/DAO_galleta");
const { Galleta } = require("../models/galleta.model");

const post_galleta = async(req, res) => {
    
    const {nombre_galleta, caducidad, descripcion, estatus, costo_produccion, id_receta} = req.body;

    try{
    
        const create_galleta_command = new Create_Galleta(nombre_galleta, caducidad, descripcion, estatus, costo_produccion, id_receta);


        const created_cookie = await create_galleta_command.create_galleta(nombre_galleta, caducidad, descripcion, costo_produccion, id_receta);



        return res.status(200).json({
            message: "Cookie created successfully",
            cookie: created_cookie
        })
        
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

const update_galleta = async(req, res) => {
    const {nombre_galleta} = req.body;
    const {id_galleta} = req.params;

    try{
        const update_galleta_command = new Update_Galleta(nombre_galleta);
        const edited_cookie = await update_galleta_command.update_galleta(nombre_galleta, id_galleta);

        return res.status(200).json({
            message: "Cookie edited successfully",
            cookie: edited_cookie
        })

    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

const get_galletas = async(req, res) => {
    try{
       
        const dao_galleta = new Dao_galleta();
        const cookies = await dao_galleta.obtener_galletas();
        return res.status(200).json({
            message: "Cookies obtained successfully",
            cookies: cookies
        });
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};




module.exports = {post_galleta, update_galleta, get_galletas};