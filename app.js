const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

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

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
