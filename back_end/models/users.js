const db = require("../db");
const {Sequelize, DataTypes} = require("sequelize");

const users = db.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha:{
    type: DataTypes.STRING,
    allowNull: false,
  }
});

users.sync();


module.exports = users;
