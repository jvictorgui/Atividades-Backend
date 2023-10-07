const {BooksService} = require('../service')
const {mapStatusHTTP} = require('../utils/mapStatus')

const getAllBooks = async (_req, res) => {
    const books = await BooksService.getAllBooks()    

    res.status(200).send(books)
}
const getBookById = async (req, res) => {
    const { id } = req.params
    const book = await BooksService.getBookById(id)
    if (!book) {
        return res.status(404).send({ message: 'Book not found' })
    }

    res.status(200).send(book)
}

const createBook = async (req, res) => {
    const {title, author, pageQuantity} = req.body;
    const newBook = await BooksService.createBook(title, author, pageQuantity)
    res.status(201).send(newBook)
}
const updateBook = async (req, res) => {
    const {title, author, pageQuantity} = req.body;
    const { id } = req.params
    const {status, data} = await BooksService.updateBook(id,title, author, pageQuantity)
    if(!data) {
        return res.status(mapStatusHTTP(status)).send({message: 'Book not found'})
    } 
    res.status(mapStatusHTTP(status)).json({message: 'Book updated!', data})
}
module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook
}