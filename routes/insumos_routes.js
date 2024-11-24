const { Router } = require('express'); 
const { post_insumo, get_insumos, update_insumo, add_stock } = require('../controllers/insumos_controller');
const router_insumos = Router();

router_insumos.get('/getInsumos', get_insumos);
router_insumos.post('/createInsumo', post_insumo);
router_insumos.put('/updateInsumo/:id_insumo', update_insumo);
router_insumos.put('/addStock/:id_insumo', add_stock);


module.exports = {router_insumos}