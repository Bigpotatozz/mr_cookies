const { Router } = require('express'); 
const { post_galleta, update_galleta, get_galletas, get_galletas_todo } = require('../controllers/inventario_controller');
const router_inventario = Router();


router_inventario.post('/postGalleta', post_galleta);
router_inventario.put('/updateGalleta/:id_galleta', update_galleta);
router_inventario.get('/getGalletas', get_galletas);
router_inventario.get('/getGalletasTodo', get_galletas_todo);


module.exports = {router_inventario}    