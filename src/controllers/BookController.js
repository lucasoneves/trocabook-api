const { Op } = require("sequelize");
const Controller = require("./Controller.js");
const BookServices = require("../services/BookServices.js");

const bookServices = new BookServices();

class BookController extends Controller {
  constructor() {
    super(bookServices);
  }

  async getBooks(req, res) {
    const { start_date, end_date, title } = req.query;
    const where = {};

    if (start_date || end_date) {
      where.createdAt = {
        ...(start_date && { [Op.gte]: new Date(start_date) }),
        ...(end_date && { [Op.lte]: new Date(end_date) }),
      };

    }

    if (title) {
      where.title = {
        [Op.like]: `%${title}%`,
      };
    }
    
    console.log('Where clause:', where);


    try {
      const booksList = await bookServices.getAllRegisters(where);
      return res.status(200).json({ data: booksList });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;
