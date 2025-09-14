const express = require('express');
const router = express.Router();
const instTypeController = require('../controllers/instType.controller');

router.get('/get-institute-types', instTypeController.getInstTypes);
router.put('/update-institute-type/:id', instTypeController.updateInstType);
router.post('/add-institute-type', instTypeController.createInstType);
router.delete('/delete-institute-type/:id', instTypeController.deleteInstType);

module.exports = router;
