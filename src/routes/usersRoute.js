const { Router } = require('express');

const UserController = require('../controllers/UserController.js');

const router = Router();

router.get('/users', UserController.getAll);

module.exports = router;