const {BooksService} = require('../service')

const getAllBooks = async (_req, res) => {
    const books = await BooksService.getAllBooks()    

    res.status(200).send(books)
}
module.exports = {
    getAllBooks
}