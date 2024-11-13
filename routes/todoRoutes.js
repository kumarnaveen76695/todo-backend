// routes/todoRoutes.js
const express = require('express');
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');
const auth = require('../middleware/auth');
const router = express.Router();

// POST: Create a new Todo
router.post('/', auth, createTodo);

// GET: Get all todos for the authenticated user
router.get('/', auth, getTodos);

// GET: Get a specific Todo by ID
router.get('/:id', auth, getTodoById);

// PUT: Update a Todo by ID
router.put('/:id', auth, updateTodo);

// DELETE: Delete a Todo by ID
router.delete('/:id', auth, deleteTodo);

module.exports = router;
