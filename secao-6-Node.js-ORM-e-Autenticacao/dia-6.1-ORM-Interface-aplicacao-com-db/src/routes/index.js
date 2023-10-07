const router = require('express').Router();
const booksRouter = require('./booksRoutes');  

router.use('/books', booksRouter);

module.exports = router;

