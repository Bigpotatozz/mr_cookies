const { DataTypes } = require("sequelize");
const { db_connection } = require("../config/connection");
class Receta{

    constructor(){
        this.model = db_connection.define('receta',{

            id_receta: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER},
            nombre_receta: {type: DataTypes.STRING},
            
        }, {tableName:'receta', timestamps: false});
    }
}

module.exports = {Receta};