const Sequelize = require('sequelize');
const sequelize = require('./sequelize')

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING
    }
//    createdat / updatedat sont crée de base dans la bdd
});

Users.sync()
module.exports = Users