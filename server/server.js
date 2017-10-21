const express = require('express');

var app = express();

var users = [{name: 'Austin', age:24}, {name: 'Morgan', age:21}, {name: 'Karen', age: 45}];

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'page not found',
        name: 'austin v 1.0'
    });
});

app.get('/users', (req,res) => {
    res.status(200).send(users);
});

app.listen(3000);
module.exports.app = app;
