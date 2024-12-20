const { Router } = require("express");

const UserController = require("../controllers/UserController.js");

const userController = new UserController();

const router = Router();

router.get("/users", (req, res) => userController.getAll(req, res));
router.get("/users/all", (req, res) => userController.getAllUsers(req, res));
router.get("/users/:id", (req, res) => userController.getSingle(req, res));
router.post("/users", (req, res) => userController.createData(req, res));
router.put('/users/:id', (req, res) => userController.updateData(req, res));

module.exports = router;
