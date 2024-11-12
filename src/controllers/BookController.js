const { Op } = require('sequelize');


const Controller = require('./Controller.js');
const BookServices = require('../services/BookServices.js');

const bookServices = new BookServices();
class BookController extends Controller {
  constructor() {
    super(bookServices);
  }

  async getBooks(req, res) {
    const { start_date, end_date} = req.query;

    let where = {};

    where = {
      createdAt: {
        [Op.gte]: start_date,
        [Op.lte]: end_date
      }
    }

    start_date || end_date ? where.createdAt = {} : null;
    start_date ? where.createdAt[Op.gte] = start_date : null;
    end_date ? where.createdAt[Op.lte] = end_date : null;

    try {
      const booksList = await bookServices.getAllRegisters(where);
      console.log(booksList)
      return res.status(200).json({
        data: [
          ...booksList
        ]
      })
    } catch (error) {
      return res.status(500).json({
        error: error.message
      })
    }
  }
}

module.exports = BookController;