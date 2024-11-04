const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();
class UserBooksController extends Controller {
  constructor() {
    super(userServices);
  }

  async getAllBooks(req, res) {
    try {
      const usersList = await userServices.getUsersByScope();
      return res.status(200).json(usersList);
    } catch (error) {
      return res.status(404).json({ error: error.message })
    }
  }
}

module.exports = UserBooksController;