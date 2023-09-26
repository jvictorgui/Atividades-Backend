const { Book } = require('../models')

const getAllBooks = async () => {
const books = await Book.findAll()
console.log('BOOKS SERVICE: ', books)
return  books
}

module.exports = { getAllBooks}
