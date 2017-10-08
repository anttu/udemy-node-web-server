const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));


hbs.registerHelper('year', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Index page',
        welcomemessage: 'Hello world!'
    });
});

app.get('/about', (req, res) => {
    //res.send('About page');
    res.render('about.hbs', {
        title: 'About page'
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
