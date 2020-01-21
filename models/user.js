module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        pw: DataTypes.STRING
    });
    return User;
};
