const Controller = require('./Controller.js');
const UserBookService = require('../services/UserBookService.js');

const userBookService = new UserBookService();

class UserBookController extends Controller {
  constructor() {
    super(userBookService);
  }

  async getAll(req, res) {
    try {
      const userBooks = await userBookService.getAllUserBooks();
      return res.status(200).json(userBooks);
    } catch (error) {
      console.error("ERROR getAll Userbooks: ", error.message)
      return res.status(500).json({ error: error.message });
    }
  }
  
  async addBook(req, res) {
    const { user_id, book_id  } = req.body;
    try {
      const userBook = await userBookService.addBookToUser({ user_id: user_id, book_id: book_id});
      return res.status(201).json({ message: "Added successfully"})
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserBookController;
