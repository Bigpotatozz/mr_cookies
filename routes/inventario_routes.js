const { Router } = require('express'); 
const { post_galleta, update_galleta, get_galletas, send_to_production } = require('../controllers/inventario_controller');
const router_inventario = Router();


router_inventario.post('/postGalleta', post_galleta);
router_inventario.put('/updateGalleta/:id_galleta', update_galleta);
router_inventario.get('/getGalletas', get_galletas);


module.exports = {router_inventario}