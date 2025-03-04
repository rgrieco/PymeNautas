const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const postsRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Archivos estáticos (Frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MongoDB (ajusta la URL según tu configuración)
mongoose.connect('mongodb://localhost:27017/pyme_nautas_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

// Rutas API para posts
app.use('/api/posts', postsRoutes);

// Ruta fallback para servir index.html en otras rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});