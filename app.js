const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const users = require('./routes/users');

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Invalid');
});

app.listen(port, () => {
    console.log("server started on PORT " +port);
});
