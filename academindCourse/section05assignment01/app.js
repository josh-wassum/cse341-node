const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First middleware");
//     next;
// });

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send("<p>Assignment Solved<p>");
// });

app.use('/users', (req, res, next) => {
    console.log("Users middleware");
    res.send("<h1>The Users Page</h1>");
});

app.use('/', (req, res, next) => {
    console.log('Default middleware');
    res.send("<h1>The Default Page</h1>");
});

app.listen(3000);