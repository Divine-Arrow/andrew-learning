const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongoose').Types;
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((result) => {
        res.send({
            result
        });
    }, (e) => {
        res.status(400).send(e);
    });
    // res.send(process.env.MONGODB_URI);
});

app.get('/todos/:id', (req, res) => {
    id = req.params.id;
    // isvalid
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((result) => {
        if (!result)
            return res.status(404).send();
        res.send(result);
    }, (e) => {
        res.status(400).send();
    });

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send()
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    
    if(!body) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((result) => {
        if(!result)
            return res.status(404).send();
        res.send({result});
    }, (e) => {
        return res.status(400).send();
    });
});

app.get('*', (req, res) => {
    res.send('<h1>Welcome to TodoApp</h1>');
});

app.listen(port, () => {
    console.log(`Server is started at ${port}`)
});