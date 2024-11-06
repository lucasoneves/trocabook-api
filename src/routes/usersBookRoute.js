const { Router } = require("express");

const UserBookController = require("../controllers/UserBooksController.js");

const userBookController = new UserBookController();

const router = Router();

router.get("/users/books", (req, res) => userBookController.getAll(req, res));
router.post('/users/books', (req, res) => userBookController.addBook(req, res));


module.exports = router;
