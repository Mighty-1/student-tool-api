const express = require("express");
const router = express.Router();
const instituteController = require("../controllers/institute.controller");

router.get("/get-institutes", instituteController.getInstitutes);
router.post("/add-institute", instituteController.createInstitute);
router.put("/update-institute/:id", instituteController.updateInstitute);
router.delete("/delete-institute/:id", instituteController.deleteInstitute);
router.get("/all-institutes", instituteController.getAllInstitutes);

module.exports = router;
