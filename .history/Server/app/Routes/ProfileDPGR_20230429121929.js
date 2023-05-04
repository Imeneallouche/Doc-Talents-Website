const express = require('express');
const connection = require("../../DB/db_config");
const ProfileDPGR = express();

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
    });
    });
