const db = require("../db");
const Sequelize = require("sequelize");

const Tarefas = db.define("Tarefas", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  titulo:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  status:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_criacao:{
    type: Sequelize.DATE,
    allowNull: false,
  },
  data_limite:{
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Tarefas.sync();

module.exports = Tarefas;