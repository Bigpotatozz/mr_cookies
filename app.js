const dotenv = require('dotenv');
const { Server } = require('./models/server');
dotenv.config();



const servidor = new Server();

servidor.listen();