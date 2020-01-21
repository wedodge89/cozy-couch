module.exports = function(sequelize, DataTypes) {
  let Book = sequelize.define("Book", {
    bookTitle: DataTypes.STRING,
    bookLink: DataTypes.STRING
  });
  return Book;
};
