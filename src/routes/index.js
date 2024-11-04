const express = require("express");

const users = require("./usersRoute.js");
const userBooks = require('./usersBookRoute.js');
const books = require("./booksRoute.js");
const categories = require("./categoriesRoute.js");

module.exports = (app) => {
  app.use(express.json(), users, userBooks, books, categories);
};
