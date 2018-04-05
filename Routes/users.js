const router = require('express').Router()
const Users = require('../Model/Users')

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/', async function (req, res) {

    const users = await Users.findAll();
    console.log(users);
    res.render('users', {usr: users})
});

router.get('/add', async function (req, res) {
    res.render('create')
});

router.get('/id/:id', async function (req, res) {

    const usr = await Users.findById(req.params.id);
    console.log(usr);
    res.render('users', {usr: [usr]}) // pb
});

router.get('/login', async function (req, res) {
    res.render('login')
});

router.post('/add', async function (req, res) {

    let login = req.body.login;
    console.log(login);
    if (login === undefined) {
        console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
        return;
    }
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        Users.create({login: req.body.login, password: hash, pseudo: req.body.pseudo})
            .then(function () {
                res.redirect('/users');
            })
    });



});

router.post('/login', async function (req, res) {

    let login = req.body.login;
    let pass = req.body.password;



    let bddusr = await Users.findAll({where: {login: login}});
    console.log(bddusr);
    // console.log(pass);
    // console.log(bddusr[0].dataValues.password);

    bcrypt.compare(pass, bddusr[0].dataValues.password, function(err, resu) {
        console.log(resu);
        if (resu === true) {
            res.send('<h1>'+bddusr[0].dataValues.pseudo+'</h1>')
        }else {

            res.send('<h1> No user found </h1>')
        }
    });

});

router.delete('/:id', function (req, res) {

    Users.destroy({where: {id: req.params.id}})
    // sqlize.deleteById(req.params.id).then(function () {
    res.redirect('/users');
    // })
});

router.patch('/:id', function (req, res) {

    let msg = req.body.pseudo;
    if (msg === undefined) {
        console.log('use x-www-form-urlencoded to pass parameters with the keyword message and it\'s value! ;)');
        return;
    }

    Users.update({pseudo: req.body.pseudo}, {where: {id: req.params.id}});
    // sqlize.updateById(req.params.id, msg).then(function () {
    res.redirect('/users');
    // })
});

module.exports = router;
