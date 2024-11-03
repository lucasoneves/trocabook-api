const { Router } = require("express");

const BookController = require("../controllers/BookController.js");

const bookController = new BookController();

const router = Router();

router.get("/books", (req, res) => bookController.getAll(req, res));
router.get("/books/:id", (req, res) => bookController.getSingle(req, res));
router.post('/books', (req, res) => bookController.createData(req, res));
router.put('/books/:id', (req, res) => bookController.updateData(req, res));
router.delete('/books/:id', (req, res) => bookController.deleteData(req, res));

module.exports = router;
