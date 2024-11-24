const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Insumo{

    constructor(){
        this.model = db_connection.define('inventario',{

            id_insumo: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            nombre: {type: DataTypes.STRING},
            precio: {type: DataTypes.FLOAT},
            tipo_insumo: {type: DataTypes.STRING},
            tipo_unidad: {type: DataTypes.STRING},
            cantidad: {type: DataTypes.INTEGER},
            caducidad: {type: DataTypes.DATE},
            estatus: {type: DataTypes.STRING, defaultValue: 'OK'},


        }, {tableName:'insumo', timestamps: false});
    }
}

module.exports = {Insumo};