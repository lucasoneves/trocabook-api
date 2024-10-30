const { Router } = require("express");

const CategoryController = require("../controllers/CategoryController.js");

const categoryController = new CategoryController();

const router = Router();

router.get("/categories", (req, res) => categoryController.getAll(req, res));
router.get('/categories/:id', (req, res) => categoryController.getSingle(req,res));
router.put('/categories/:id', (req, res) => categoryController.updateData(req, res));
router.post('/categories', (req, res) => categoryController.createData(req,res));

module.exports = router;
