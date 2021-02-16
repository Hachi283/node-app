const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello there. You did it!')
});

app.listen(process.env.PORT || 3000);

module.exports = app;

