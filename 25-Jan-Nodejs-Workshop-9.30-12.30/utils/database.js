const express = require('express');
const Sq = require('sequelize');
const mysql = require('mysql');

let app = express();

//configure database
const sequelize = new Sq(
    'db',
    'root',
    'cybage@123', {
        dialect: 'mysql',

        host: 'localhost'
    }
);

module.exports = sequelize;