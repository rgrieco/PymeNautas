const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Obtener todas las entradas
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una entrada por ID
router.get('/:id', getPost, (req, res) => {
  res.json(res.post);
});

// Crear una nueva entrada
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar una entrada
router.patch('/:id', getPost, async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.content != null) {
    res.post.content = req.body.content;
  }
  if (req.body.author != null) {
    res.post.author = req.body.author;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una entrada
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: 'Entrada eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener una entrada por ID
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Entrada no encontrada' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.post = post;
  next();
}

module.exports = router;