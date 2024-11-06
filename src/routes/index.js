const express = require("express");

const users = require("./usersRoute.js");
const books = require("./booksRoute.js");
const categories = require("./categoriesRoute.js");
const userBooks = require('./usersBookRoute.js');

module.exports = (app) => {
  app.use(express.json(), userBooks, users, books, categories);
};
