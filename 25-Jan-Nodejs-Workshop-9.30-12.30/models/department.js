const Sq = require('sequelize');

const sequel = require('../utils/database');  //db connection pool managed sequelize

//create Department table
const Department = sequel.define('department', {
    deptid:{
        type:Sq.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    deptname:{
        type:Sq.STRING,
        allowNull:false
    }
});

//Exporting 'Department' table
module.exports = Department;