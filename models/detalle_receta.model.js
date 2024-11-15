const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Detalle_receta {

    constructor(){
      db_connection.define('inventario',{       
        id_detalle_receta: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
        cantidad_insumo: {type: DataTypes.INTEGER},
        id_inventario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'inventario',
                key: 'id_inventario'
            }
        },
        id_receta: {
            type: DataTypes.INTEGER,
            references: {
                model: 'receta',
                key: 'id_receta'
            }
        }
        
        }, {tableName:'inventario', timestamps: false});
    }
}

module.exports = {Detalle_receta};