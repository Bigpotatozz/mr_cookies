const { Router } = require('express'); 
const { update_estatus, get_production } = require('../controllers/produccion_controller');

const router_produccion = Router();

router_produccion.put('/updateEstatus/:id_galleta', update_estatus);

router_produccion.get('/getProduction', get_production);

module.exports = {router_produccion}