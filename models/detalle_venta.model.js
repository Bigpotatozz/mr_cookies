const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");

class Detalle_venta {

    constructor(){
        this.model = db_connection.define('detalle_venta',{

            id_detalle_venta: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            tipo_unidad: {type: DataTypes.STRING},
            unidades_vendidas: {type: DataTypes.INTEGER},
            precio_venta: {type: DataTypes.FLOAT},
            
            id_galleta: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'galleta',
                    key: 'id_galleta'
                }
            },

            id_venta: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'venta',
                    key: 'id_venta'
                }
            }
            
        }, {tableName:'detalle_venta', timestamps: false});
    }
}

module.exports = {Detalle_venta};