const BookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', { // 'Book' é o nome da tabela no banco de dados
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'books', // 'books' é o nome da tabela no banco de dados
      // underscored: true, // Opção para usar nomes de colunas em estilo snake_case
      timestamps: true, // Isso adicionará automaticamente os campos 'createdAt' e 'updatedAt'
    });
  
    return Book;
  };
  
  module.exports = BookModel;
  