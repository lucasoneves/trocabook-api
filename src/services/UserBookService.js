const Services = require('./Services.js');
const dataSource = require('../database/models');

class UserBookService extends Services {
  constructor() {
    super('UserBooks');
  }

  async getAllUserBooks() {
    return await dataSource.UserBooks.findAll({
      include: [
        {
          model: dataSource.User,
          as: 'user', // O alias definido no modelo Book.js
          attributes: ['id', 'name', 'email']
        },
        {
          model: dataSource.Book,
          as: 'book', // O alias definido no modelo User.js
          attributes: ['id', 'title', 'description']
        }
      ]
    });
  }

  async addBookToUser(data) {
    const userExists = await dataSource.User.findByPk(data.user_id);
    const bookExists = await dataSource.Book.findByPk(data.book_id);

    if (!userExists || !bookExists) {
      throw new Error('User or Book not found');
    }
    
    return await dataSource.UserBooks.create({
      user_id: data.user_id,
      book_id: data.book_id
    });
  }
}

module.exports = UserBookService;
