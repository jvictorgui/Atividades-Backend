const express = require('express');
const app = express();
const { BooksController } = require('./controller');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});
app.get('/books', BooksController.getAllBooks)

module.exports = app;