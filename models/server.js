const express = require('express');
const cors = require('cors');
const {connection} = require('../config/connection');
const { router_inventario } = require('../routes/inventario_routes');


class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8081";
        this.middlewares();
        this.connection();
        this.routes();

    }

    middlewares(){
        this.app.use(cors({
            origin: '*'
        }));
        this.app.use(express.json());
    }

    async connection(){
        try{
            
            await connection();

        }catch(e){
            throw new Error(e);
        }
    }

    routes(){
        this.app.use('/api/inventario', router_inventario);
     }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el http://localhost:${this.port}/`)
        });
    }
}

module.exports = {Server}