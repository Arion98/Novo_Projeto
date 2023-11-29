var express = require('express');
var router = express.Router();
const sequelize = require('../db');
const Tarefa = require('../models/tarefa');

sequelize.sync()


router.get('/tarefas', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  sequelize.query(`SELECT * FROM tarefas ORDER BY updatedAt DESC LIMIT ? OFFSET ?`,
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

//GET Consulta uma tarefa pelo ID
router.get('/tarefas/:id', async (req, res) => {
  sequelize.query(`SELECT * FROM tarefas WHERE id = ?`, { replacements: [req.params.id] })
  .then(([results, metadata]) => {
      if (results.length === 0) {
          res.status(404).json({
              success: false,
              message: "tarefa não encontrada",
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

//POST Cria uma tarefa
router.post('/tarefas', async (req, res) => {
  sequelize.query(`INSERT INTO tarefas (titulo,descricao,status,data_criacao,data_limite, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      { replacements: [req.body.titulo, req.body.descricao, req.body.status,req.body.data_criacao,req.body.data_limite, new Date(), new Date()] }
  )
  .then(([results, metadata]) => {
      res.status(201).json({
          success: true,
          message: "Tarefa criada com sucesso",
      });
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//PUT Atualiza uma tarefa pelo ID
router.put('/tarefas/:id', async (req, res) => {
  sequelize.query(`UPDATE tarefas SET titulo,descricao = ? WHERE id = ?`,
      { replacements: [req.body.titulo,req.body.descricao, req.params.id] }
  )
  .then(([results, metadata]) => {
      if (metadata.affectedRows === 0) {
          res.status(404).json({
              success: false,
              message: "tarefa não encontrada",
          });
      } else {
          res.json({
              success: true,
              message: "Tarefa atualizada com sucesso",
          });
      }
  }).catch((error) => {
      res.status(500).json({
          success: false,
          message: error.message,
      });
  });
});

//DELETE Deleta uma tarefa pelo ID
router.delete('/tarefas/:id', async (req, res) => {
  sequelize.query(`DELETE FROM tarefas WHERE id = ?`, { replacements: [req.params.id] })
  .then(([results, metadata]) => {
      if (metadata.affectedRows === 0) {
          res.status(404).json({
              success: false,
              message: "tarefa não encontrada",
          });
      } else {
          res.json({
              success: true,
              message: "Tarefa deletada com sucesso",
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
