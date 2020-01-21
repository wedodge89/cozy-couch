module.exports = function(sequelize, DataTypes) {
  let TelevisionShow = sequelize.define("TelevisionShow", {
    tvTitle: DataTypes.STRING,
    tvLink: DataTypes.STRING
  });
  return TelevisionShow;
};
