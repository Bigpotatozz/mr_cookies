const { Sequelize } = require("sequelize");
const { Detalle_venta } = require("../models/detalle_venta.model");
const { Venta } = require("../models/venta.model");
const { connection, db_connection } = require("../config/connection");
const { Galleta } = require("../models/galleta.model");
const { Create_Venta } = require("../commands/CQRS_venta");
const { Dao_venta } = require("../DAO/DAO_venta");

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

get_ventas = async(req, res) => {
    try{
    
        const dao_venta =  new Dao_venta();
        const ventas =  await dao_venta.obtener_ventas();

        return res.status(200).json({
            message: "Ventas obtenidas con éxito",
            ventas: ventas
        })
    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
};


get_detalle_ventas = async(req, res) => {
    try{

        const dao_venta = new Dao_venta();
        const detalle_ventas = await dao_venta.obtener_detalle_ventas();

        return res.status(200).json({
            message: "Detalle de ventas obtenido con éxito",
            detalle_ventas: detalle_ventas
        });

    }catch(e){
        res.status(500).json({
            message: e.message
        });
    }
}

module.exports = {post_venta, get_ventas, get_detalle_ventas};