const { Galleta } = require("../models/galleta.model");

const post_galleta = async(req, res) => {
    
    const {nombre_galleta, caducidad, descripcion, estatus, costo_produccion, id_receta} = req.body;

    try{
    
        const galleta = new Galleta();

        await galleta.model.create({nombre_galleta, caducidad, descripcion, estatus, costo_produccion, id_receta_fk: id_receta});

        return res.status(200).json({
            message: "Cookie created successfully"
        })
        
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}


module.exports = {post_galleta};