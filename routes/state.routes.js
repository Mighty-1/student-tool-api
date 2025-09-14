const express = require('express');
const router = express.Router();
const stateController = require('../controllers/state.controller');

router.get('/get-states', stateController.getStates);
router.post('/add-state', stateController.createState);
router.put('/update-state/:id', stateController.updateState);
router.delete('/delete-state/:id', stateController.deleteState);


module.exports = router;
