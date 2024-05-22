const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

// Middleware для парсингу JSON-даних
app.use(express.json());

// Обробка GET-запиту
app.get('/', (req, res) => {
    res.send('GET запит оброблено');
});

// Обробка POST-запиту
app.post('/', (req, res) => {
    const data = req.body;
    res.send(`POST запит оброблено з даними: ${JSON.stringify(data)}`);
});

// Обробка PUT-запиту
app.put('/', (req, res) => {
    const data = req.body;
    res.send(`PUT запит оброблено з даними: ${JSON.stringify(data)}`);
});

// Обробка DELETE-запиту
app.delete('/', (req, res) => {
    res.send('DELETE запит оброблено');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});