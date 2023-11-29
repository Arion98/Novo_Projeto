var express = require('express');
var router = express.Router();
const sequelize = require('../db');
const Users = require('../models/users');

sequelize.sync()

/* GET users listing. */
router.get('/usuarios', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  sequelize.query(`SELECT * FROM usuarios ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
      { replacements: [parseInt(limit), (page - 1) * parseInt(limit)] }
  )
  .then(([results, metadata]) => {
      res.json(results);
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//GET Consulta uma usuarios pelo ID
router.get('/usuarios/:id', async (req, res) => {
  sequelize.query(`SELECT * FROM usuarios WHERE id = ?`, { replacements: [req.params.id] })
  .then(([results, metadata]) => {
      if (results.length === 0) {
          res.status(404).json({
              success: false,
              message: "usuarios não encontrado",
          });
      } else {
          res.json({
              success: true,
              tarefas: results[0],
          });
      }
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//POST Cria uma usuario
router.post('/usuarios', async (req, res) => {
  sequelize.query(`INSERT INTO usuarios (username,email,senha, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`,
      { replacements: [req.body.username, req.body.email, req.body.senha, new Date(), new Date()] }
  )
  .then(([results, metadata]) => {
      res.status(201).json({
          success: true,
          message: "usuario criado com sucesso",
      });
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//PUT Atualiza uma usuario pelo ID
router.put('/usuarios/:id', async (req, res) => {
  sequelize.query(`UPDATE usuarios SET senha = ? WHERE id = ?`,
      { replacements: [req.body.senha,req.params.id] }
  )
  .then(([results, metadata]) => {
      if (metadata.affectedRows === 0) {
          res.status(404).json({
              success: false,
              message: "usuario não encontrado",
          });
      } else {
          res.json({
              success: true,
              message: "usuario atualizado com sucesso",
          });
      }
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//DELETE Deleta uma usuario pelo ID
router.delete('/usuarios/:id', async (req, res) => {
  sequelize.query(`DELETE FROM usuarios WHERE id = ?`, { replacements: [req.params.id] })
  .then(([results, metadata]) => {
      if (metadata.affectedRows === 0) {
          res.status(404).json({
              success: false,
              message: "usuario não encontrado",
          });
      } else {
          res.json({
              success: true,
              message: "usuario deletado com sucesso",
          });
      }
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});
module.exports = router;
