const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const IP = '10.0.0.202';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const serveStatic = require('serve-static');
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(express.static('public'));


app.get('/grid', (req, res) => {
    res.render('grid');
});

app.get('/favicon.ico', (req, res) => {
    res.end('favicon');
});




// if (module === require.main) {
//   const server = app.listen(process.env.PORT || 8080, IP,() => {
//     const port = server.address().port;
//     console.log(`${IP}:${port}`);
//   });
// }

// module.exports = app;

app.listen(3333, IP)

