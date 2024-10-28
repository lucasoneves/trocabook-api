const Controller = require('./Controller.js');
const BookServices = require('../services/BookServices.js');

const bookServices = new BookServices();
class BookController extends Controller {
  constructor() {
    super(bookServices);
  }
}

module.exports = BookController;