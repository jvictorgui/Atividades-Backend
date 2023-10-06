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
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        throw new Error(`Book with id ${id} not found`);
      }
      const updatedBook = await book.update({ title, author, pageQuantity });
      return updatedBook;
    } catch (error) {
      console.error(error);
    }
  };

module.exports = { getAllBooks, getBookById, createBook, updateBook}
