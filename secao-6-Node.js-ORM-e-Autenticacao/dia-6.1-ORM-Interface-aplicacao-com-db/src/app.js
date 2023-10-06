const express = require('express');
const app = express();
const { BooksController } = require('./controller');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});
app.get('/books', BooksController.getAllBooks)
app.get('/books/:id', BooksController.getBookById)
app.post('/books', BooksController.createBook)
app.put('/books/:id', BooksController.updateBook)

module.exports = app;