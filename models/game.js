module.exports = function(sequelize, DataTypes) {
  let Game = sequelize.define("Game", {
    gameTitle: DataTypes.STRING,
    gameLink: DataTypes.STRING
  });
  return Game;
};
