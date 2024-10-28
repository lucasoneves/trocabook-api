const Services = require('./Services.js');

class BookServices extends Services {
  constructor() {
    super('Book');
  }
}

module.exports = BookServices;