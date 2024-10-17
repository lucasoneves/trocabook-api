const express = require('express');
const db = require('./src/models');

const app = express();
const PORT = 8080;

db.sequelize.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(err => {
  console.log("Não foi possível se conectar com o bando de dados.", err)
})

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de troca de livros funcionando")
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
})

