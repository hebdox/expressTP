const Sequelize = require('sequelize');
const sequelize = require('./Sequelize')

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    pseudo: {
        type: Sequelize.STRING
    }
//    createdat / updatedat sont crée de base dans la bdd
});

Users.sync()
module.exports = Users