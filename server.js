const express = require('express');
const routes = require('./src/routes');
const db = require('./src/database/models');

const app = express();
const PORT = 8080;

db.sequelize.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(err => {
  console.log("Não foi possível se conectar com o bando de dados.", err)
})

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
})

