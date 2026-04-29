const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();

const sequelize = new Sequelize('banco_treinamento', 'admin', 'senha_secreta', {
  host: 'localhost',
  dialect: 'postgres'
});

app.use(express.json());

app.get('/teste', async (req, res) => {
  
  try {
    await sequelize.authenticate();
    console.log("Conectou ao banco");
  } catch (error) {
    console.log("Erro ao tentar conectar ao banco", error);
  }
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;
