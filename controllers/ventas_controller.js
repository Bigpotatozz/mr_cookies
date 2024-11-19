const { Sequelize } = require("sequelize");
const { Detalle_venta } = require("../models/detalle_venta.model");
const { Venta } = require("../models/venta.model");
const { connection, db_connection } = require("../config/connection");
const { Galleta } = require("../models/galleta.model");
const { Create_Venta } = require("../commands/CQRS_venta");

post_venta = async(req, res) => {

    let productos = req.body;
  
    try{

        const cqrs_venta =  new Create_Venta (productos);
        const response = await cqrs_venta.create_venta(productos);

      

        return res.status(200).send({
            message: response
        })
        

      
        

    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }





};


module.exports = {post_venta};