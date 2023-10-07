const { Book } = require('../models')

const getAllBooks = async () => {
const books = await Book.findAll()
return  books
}

const getBookById = async (id) => {
    const book = await Book.findByPk(id)
    return book
}

const createBook = async (title, author, pageQuantity) => {
    const newBook = await Book.create({ title, author, pageQuantity })
    return newBook
}

const updateBook = async (id, title, author, pageQuantity) => {
    try{
        const book = await Book.findByPk(id);
        if (!book) {
            return {status: 'NOT_FOUND', data: null}
        } 
        const updatedBook = await book.update({ title, author, pageQuantity });
      return {status: 'OK', data: updatedBook};      
    } 
    
    catch(error) {
        return {status: 'INTERNAL_SERVER_ERROR', data: null}
    }
      
      
  };

module.exports = { getAllBooks, getBookById, createBook, updateBook}
