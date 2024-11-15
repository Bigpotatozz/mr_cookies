const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Inventario{

    constructor(){
        this.model = db_connection.define('inventario',{

            id_inventario: {primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            nombre_insumo: {type: DataTypes.STRING},
            precio_insumo: {type: DataTypes.FLOAT},
            tipo_insumo: {type: DataTypes.STRING},
            cantidad_isumo: {type: DataTypes.INTEGER},
            caducidad_insumo: {type: DataTypes.DATE},


        }, {tableName:'inventario', timestamps: false});
    }
}

module.exports = Inventario;