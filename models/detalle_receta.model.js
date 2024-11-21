const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Detalle_receta {

    constructor(){
      db_connection.define('detalle_receta',{       
        id_detalle_receta: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
        cantidad: {type: DataTypes.INTEGER},
        id_insumo: {
            type: DataTypes.INTEGER,
            references: {
                model: 'insumo',
                key: 'id_insumo'
            }
        },
        id_galleta: {
            type: DataTypes.INTEGER,
            references: {
                model: 'galleta',
                key: 'id_galleta'
            }
        }
        
        }, {tableName:'detalle_receta', timestamps: false});
    }
}

module.exports = {Detalle_receta};