const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  // Aquí, puedes guardar la información de la imagen en tu base de datos si es necesario
  res.json({ imageURL: `/uploads/${req.file.filename}` }); // Devuelve la URL de la imagen
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
})