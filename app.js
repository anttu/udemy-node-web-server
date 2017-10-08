const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Index page',
        year: new Date().getFullYear(),
        welcomemessage: 'Hello world!'
    });
});

app.get('/about', (req, res) => {
    //res.send('About page');
    res.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'HTTP request failed'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
