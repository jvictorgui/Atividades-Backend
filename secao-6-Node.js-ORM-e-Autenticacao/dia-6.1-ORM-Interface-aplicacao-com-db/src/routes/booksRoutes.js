const booksRouter = require('express').Router();
const { BooksController } = require('../controller');

booksRouter.get('/', BooksController.getAllBooks);
booksRouter.get('/:id', BooksController.getBookById);
booksRouter.post('/', BooksController.createBook);
booksRouter.put('/:id', BooksController.updateBook);  


module.exports = booksRouter;   
