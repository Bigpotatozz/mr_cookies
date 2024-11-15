const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");

class Venta {

    constructor(){
        this.model = db_connection.define('venta',{

            id_venta: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            fecha_venta: {type: DataTypes.DATE},
            total: {type: DataTypes.FLOAT},
            
        }, {tableName:'venta', timestamps: false});
    }
    
}

module.exports = {Venta};