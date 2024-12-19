const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/registerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB')).catch(err => console.error(err));

// Modelo de Usuario
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Ruta para registrar usuarios
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).send('Usuario registrado exitosamente');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

// Iniciar servidor
app.listen(5000, () => {
    console.log('Servidor ejecutándose en el puerto 5000');
});
