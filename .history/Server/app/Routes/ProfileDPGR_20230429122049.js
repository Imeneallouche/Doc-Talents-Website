const express = require('express');
const connection = require("../../DB/db_config");
const ProfileDPGR = express();

ProfileDPGR.get('/DPGR', (req, res) => {
    connection.query('SELECT * FROM DPGR', (err, results) => {
    if (err) throw err;
    res.send(results);
    });
    });

ProfileDPGR.post('/users', (req, res) => {
        const { name, email, password } = req.body;
        connection.query('INSERT INTO DPGR SET ?', { name, email, password }, (err, results) => {
        if (err) throw err;
        res.send(results);
        });
        });