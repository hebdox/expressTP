const path = require('path');
// const todos = require('./todo');
const Sequelize = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: path.join(__dirname, './database.sqlite')
});


//connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;