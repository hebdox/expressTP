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


// const todos = sequelize.import(__dirname + "/todo.js");

module.exports = sequelize

//
// module.exports = {
//     getAllDatas: async function () {
//         try {
//
//             return sequelize.sync()
//             // .then(() => todos.create({message: "Super Message !"}))
//             // .then(() => todos.create({message: "Super Message Bis !"}))
//                 .then(() => {
//                     // console.log(res.toJSON());
//                     return todos.findAll()
//                         .then(todoslist => {
//
//
//                             // récuperation de tout les elements
//                             let ret = [];
//
//                             for (i in todoslist) {
//
//                                 // console.log(todoslist[i].dataValues);
//                                 ret.push(todoslist[i].dataValues);
//                                 // ret.push(todoslist[i]);
//                             }
//                             console.log("sqlize - return : ");
//                             console.log(ret);
//                             return ret;         // cette valeure n'est jamais retournée !
//                         })
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
//     getAllDatasWithLimitAndOffset: async function (offset,limit) {
//         try {
//
//             sequelize.sync()
//                 .then(() => {
//                     // console.log('offset: '+ offset +' , limit : '+limit);
//                     sequelize.query('SELECT `id`, `message`, `createdAt`, `updatedAt` FROM `todos` AS `todos` LIMIT '+offset+','+limit)
//                         .then( function(datas) {
//                             console.log('Datas returned : ');
//                             console.log(datas);
//                             return datas;
//                         });
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
//     getById: async function (ID) {
//         try {
//
//             sequelize.sync()
//             // .then(() => todos.create({message: "Super Message !"}))
//             // .then(() => todos.create({message: "Super Message Bis !"}))
//                 .then(() => {
//                     // console.log(res.toJSON());
//                     console.log('getById:id = ' + ID);
//                     // todos.findAll({attributes: ['dataValues'], where: {'$dataValues.id$': parseInt(ID)}}) // where datavalues = { id: 2 } invalide :D
//                     // il est impossible d'aller chercher dans un enfant en utilisant la clause where de sequelize.
//
//                     todos.findAll() // where datavalues = { id: 2 } invalide :D
//                         .then(todoslist => {
//
//
//                             // récuperation de tout les elements
//                             let ret = [];
//
//                             for (i in todoslist) {
//
//                                 // console.log(todoslist[i]);
//                                 // console.log(todoslist[i].dataValues);
//                                 // console.log(todoslist[i].dataValues.id);
//
//
//                                 if (todoslist[i].dataValues.id == ID) {
//                                     ret.push(todoslist[i].dataValues)
//                                 }
//                             }
//                             console.log("sqlize - return : ");
//                             console.log(ret);
//                             return ret;         // cette valeure n'est jamais retournée !
//                         })
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
//     createNew: async function (msg) {
//         // [{id: 0, message: "toto"}, {id: 1, message: "tata"}]
//
//         try {
//
//             sequelize.sync()
//                 .then(() => {
//                     todos.create({message: msg});
//                     return 0;
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
//     deleteById: async function (ID) {
//         try {
//
//             sequelize.sync()
//                 .then(() => {
//                     sequelize.query('DELETE FROM todos Where id = ' + ID);
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
//     updateById: async function (ID, msg) {
//         try {
//
//             sequelize.sync()
//                 .then(() => {
//                     console.log('msg: '+ msg +' , ID : '+ID);
//                     sequelize.query('UPDATE todos SET message = \''+msg+'\' Where id = ' + ID);
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     },
//
// };

// return module.exports;


// force: true will drop the table if it already exists
// todos.sync({force: true}).then(() => {
//     // Table created
//     return ;
// })
//     .then(function () {
//     todos.findAll()
//         .then(function (res) {
//             console.log(res.toJSON());
//             // console.log("sqlize todo1: "+todos.get(message));
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });


//
// setTimeout(function () {
//
// }, 2000)


// module.exports=todos;



