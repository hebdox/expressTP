//
// module.exports = {
//     up(queryInterface, Sequelize) {
//         return queryInterface.createTable('todos', {
//             id: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//             },
//             message: {
//                 type: Sequelize.STRING
//             },
//
//             // Timestamps
//             createdAt: Sequelize.DATE,
//             updatedAt: Sequelize.DATE,
//         })
//     }
// };

const Sequelize = require('sequelize');
const sequelize = require('./sequelize')

const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: Sequelize.STRING
    }
//    createdat / updatedat sont crée de base dans la bdd
});

Todo.sync()
module.exports = Todo


