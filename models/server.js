const express = require('express');
const cors = require('cors');
const {connection} = require('../config/connection');
const { router_inventario } = require('../routes/inventario_routes');
const { router_ventas } = require('../routes/ventas_routes');
const { router_insumos } = require('../routes/insumos_routes');


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
        this.app.use('/api/ventas', router_ventas);
        this.app.use('/api/insumos', router_insumos);
     }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor escuchando en el http://localhost:${this.port}/`)
        });
    }
}

module.exports = {Server}