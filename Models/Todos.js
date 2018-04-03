const router = require('express').Router()
const Todo = require('../sqlize/todo')

router.get('/', async function (req, res) {
    let limit = +req.query.limit;
    if (isNaN(limit)) limit = undefined;

    let offset = req.query.offset;
    if (isNaN(offset)) offset = undefined;

    console.log('limit : ' + limit + ' offset : ' + offset);

    const todos = await Todo.findAll({offset, limit});
    res.render('todos', {title: 'Todo list', todos})
})

router.get('/:id', async function (req, res) {

    console.log('todos/' + req.params.id + ' : ');
    const todos = await Todo.findById(req.params.id);
    console.log(todos);
    res.render('todos', {title: 'Todo list', todos})
})

router.post('/', async function (req, res) {
    console.log('Post receved ! (create) ');

    var msg = req.body.message;
    console.log(msg);
    if (msg === {} || msg === undefined) {
        console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
        return;
    }
    Todo.create({message: req.body.message});
    res.redirect('/todos');
});

router.delete('/:id', function (req, res) {
    console.log('Delete(' + req.params.id + ') receved ');

    Todo.destroy({where: {id: req.params.id}})
    // sqlize.deleteById(req.params.id).then(function () {
    res.redirect('/todos');
    // })
});

router.patch('/:id', function (req, res) {
    console.log('Patch(' + req.params.id + ') receved (modif)');

    var msg = req.body.message;
    if (msg === {} || msg === undefined) {
        console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
        return;
    }

    Todo.update({message: req.body.message}, {where: {id: req.params.id}});
    // sqlize.updateById(req.params.id, msg).then(function () {
        res.redirect('/todos');
    // })
});

module.exports = router;