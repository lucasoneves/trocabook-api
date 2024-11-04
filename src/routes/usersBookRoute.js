const { Router } = require("express");

const UserBooksController = require("../controllers/UserBooksController.js");

const userBookController = new UserBooksController();

const router = Router();

router.get("/users/books", (req, res) => userBookController.getAllBooks(req, res));

module.exports = router;
