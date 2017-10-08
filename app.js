const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'anttu',
        password: 'foobar',
        likes: [
            'candy',
            'pretty women'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'HTTP request failed'
    });
});

app.listen(3000);
