const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

let User = sequelize.define("user", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

User.sync();

module.exports = User;