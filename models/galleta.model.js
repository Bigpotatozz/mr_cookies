const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Galleta{

    constructor(){
        this.model = db_connection.define('galleta',{

            id_galleta: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            nombre_galleta: {type: DataTypes.STRING},
            caducidad: {type: DataTypes.DATE},
            descripcion: {type: DataTypes.STRING},
            estatus: {type: DataTypes.BOOLEAN, defaultValue: true},
            costo_produccion: {type: DataTypes.FLOAT},
        
            id_receta_fk: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'receta',
                    key: 'id_receta'
                }
            }


        }, {tableName:'galleta', timestamps: false});
    }
}

module.exports = {Galleta};