const { galletas_externas_app_service } = require("../app_service/galletas_externas_service");
const { Create_Galleta, Update_Galleta } = require("../commands/CQRS_galleta");
const { Dao_galleta } = require("../DAO/DAO_galleta");
const { Galleta } = require("../models/galleta.model");
const { galleta_view_model } = require("../view_models/galleta_vm");

const post_galleta = async(req, res) => {
    
    const {id_galleta} = req.body;

    try{
    
        const create_galleta_command = new Create_Galleta(id_galleta);


        const created_cookie = await create_galleta_command.create_galleta(id_galleta);



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







const get_galletas_todo = async(req, res) => {
    try{

        const dao_galleta = new Dao_galleta();
        const galleta_vm = new galleta_view_model();
        const galletas_propias =  await dao_galleta.obtener_galletas();
        let dataPropios = await galleta_vm.formatear_data_galletas(galletas_propias);
        const galletas = new galletas_externas_app_service();
        let data = await galletas.getGalletasExternas();
        let galletas_total = [...dataPropios, ...data];
        console.log(galletas_total);
        return res.status(200).json({
            message: "Cookies obtained successfully",
            cookies: galletas_total
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}



module.exports = {post_galleta, update_galleta, get_galletas, get_galletas_todo};