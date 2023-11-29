const db = require("../db");
const Sequelize = require("sequelize");

const usersEtarefas = db.define("usersEtarefas", {
  fk_tarefas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    foreignKey:true
  },
  fk_usuarios: {
    type: Sequelize.INTEGER,
    allowNull: false,
    foreignKey:true
  }
});

usersEtarefas.sync();


module.exports = usersEtarefas;