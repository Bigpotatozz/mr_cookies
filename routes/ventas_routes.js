const { Router } = require('express'); 
const { post_venta } = require('../controllers/ventas_controller');
const router_ventas = Router();

router_ventas.post('/postVenta', post_venta);



module.exports = {router_ventas}