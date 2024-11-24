const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Galleta{

    constructor(){
        this.model = db_connection.define('galleta',{

            id_galleta: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            nombre: {type: DataTypes.STRING},
            cantidad: {type: DataTypes.INTEGER, allowNull: false},
            caducidad: {type: DataTypes.DATE},
            descripcion: {type: DataTypes.STRING},
            costo_produccion: {type: DataTypes.FLOAT},
            precio_venta: {type: DataTypes.FLOAT},
            estatus: {type: DataTypes.STRING, defaultValue: 'OK'},

        }, {tableName:'galleta', timestamps: false});
    }
}

module.exports = {Galleta};