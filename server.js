var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongoose').Types;

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    var todo = new Todo({text: req.body.text});
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((result) => {
        res.send({result});
    }, (res) => {
        res.status(400).send(e);
    });
    // res.send(process.env.MONGODB_URI);
});

app.get('/todos/:id', (req, res) => {
    id = req.params.id;
    // isvalid
    if(!ObjectId.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findById(id).then((result) => {
        if(!result) 
            return res.status(404).send();
         res.send(result);           
    }, (e) => {
        res.status(404).send();
    });

});

app.listen(port, ()=> {
    console.log(`Server is started at ${port}`)
});
