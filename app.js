const express = require('express');
const hbs = require('hbs');
const app = express();
const fs = require('fs');

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now} ${req.method} ${req.path}`
    console.log(log);
    fs.appendFile('/tmp/server.log', log + "\n", (err) => {
        if (err) {
            console.log('Could not write to log file');
        }
    });
    next();
});

/*
app.use((req, res, next) => {
    res.render('maintenance.hbs');
});*/

app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('year', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamit', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Index page',
        welcomemessage: 'Hello world!'
    });
});

app.get('/about', (req, res) => {
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
