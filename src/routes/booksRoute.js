const { Router } = require("express");

const BookController = require("../controllers/BookController.js");

const bookController = new BookController();

const router = Router();

router.get("/books", (req, res) => bookController.getAll(req, res));
router.put('/books/:id', (req, res) => bookController.updateData(req, res));

module.exports = router;
