const { Create_insumo, Update_insumo, Add_cantidad } = require("../commands/CQRS_insumo");
const { Dao_insumo } = require("../DAO/DAO_insumo");

const post_insumo = async (req, res) => {

    const {nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad} = req.body;

    try{

        const cqrs = new Create_insumo(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad);
        
        const insumo = await cqrs.create_insumo(nombre, precio, tipo_insumo, tipo_unidad, cantidad, caducidad);

        return res.status(200).json({
            message: insumo
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message
        });

    }

};

const get_insumos = async(req, res) => {
    try{

        const dao_insumos = new Dao_insumo();
        const insumos = await dao_insumos.get_insumos();

        return res.status(200).json({
            insumos: insumos
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message
        });
    }
}


const update_insumo = async(req, res) => {

    const data = req.body;
    const {id_insumo} = req.params;

    try{

        const cqrs = new Update_insumo();
        const insumo = await cqrs.update_insumo(data, id_insumo);
        return res.status(200).json({
            message: insumo
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message
        });
    }
};

const add_stock = async(req, res) => {
    const {cantidad} = req.body;
    const {id_insumo} = req.params;

    try{

        const cqrs = new Add_cantidad();
        const insumo = await cqrs.update_stock(cantidad, id_insumo);
        return res.status(200).json({
            message: insumo
        });
    

        return res.status(200).json({
            message: insumo
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: e.message
        });
    }
}
module.exports = {post_insumo, get_insumos, update_insumo, add_stock}