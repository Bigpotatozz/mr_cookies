const { Router } = require('express'); 
const { post_venta, get_ventas } = require('../controllers/ventas_controller');
const router_ventas = Router();

router_ventas.post('/postVenta', post_venta);

router_ventas.get('/getVentas', get_ventas);



module.exports = {router_ventas}