module.exports = function(sequelize, DataTypes) {
  let DigitalMovie = sequelize.define("DigitalMovie", {
    dvdTitle: DataTypes.STRING,
    dvdLink: DataTypes.STRING
  });
  return DigitalMovie;
};
