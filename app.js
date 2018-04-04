var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sqlize = require('./Model/Sequelize');
const Todo = require('./Model/Todo');
// var index = require('./routes/index');
// var users = require('./routes/users');
const todosRouter = require('./Routes/todos');
const usersRouter = require('./Routes/users');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// routes
// app.all('/', index);
app.all('/', function (req, res) {
    res.redirect('/todos')
});

app.use('/todos', todosRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/todo/:id', async function (req, res) {
//
//     var todo = [{id: 0, message: "toto"}, {id: 1, message: "tata"}];
//
//     console.log('todos/' + req.params.id + ' : ');
//     sqlize.getById(req.params.id).then((datas) => {
//
//         console.log('datas: ' + datas);
//         res.render('todos', {title: 'Todo list', todos: todo})
//     });
//
// });

// app.post('/todos', async function (req, res) {
//     console.log('Post receved ! (create) ');
//
//     var msg = req.body.message;
//     if (msg === {} || msg === undefined) {
//         console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
//         return;
//     }
//     sqlize.createNew(msg).then(function () {
//         res.redirect('/todos');
//     })
// });

// app.delete('/todo/:id', function (req, res) {
//     console.log('Delete(' + req.params.id + ') receved ');
//
//     sqlize.deleteById(req.params.id).then(function () {
//         res.redirect('/todos');
//     })
// });

// app.patch('/todo/:id', function (req, res) {
//     console.log('Patch(' + req.params.id + ') receved (modif)');
//
//     var msg = req.body.message;
//     if (msg === {} || msg === undefined) {
//         console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
//         return;
//     }
//     sqlize.updateById(req.params.id, msg).then(function () {
//         res.redirect('/todos');
//     })
// });



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
