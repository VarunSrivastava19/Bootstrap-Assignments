const Sq = require('sequelize');
const Department = require('./department');
const sequel = require('../utils/database');  //db connection pool managed sequelize

//create Employee table
const Employee = sequel.define('employee', {
    empid:{
        type:Sq.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    empname: {
        type:Sq.STRING,
        allowNull:false,
        defaultValue:'John Doe'
    },

    empsalary: {
        type:Sq.INTEGER,
        allowNull:false,
        defaultValue:35000
    }, 
    empdesgn: {
        type:Sq.STRING,
        allowNull:false,
        defaultValue:'Engineer'
    },
    dept: {
        type:Sq.INTEGER,
        references: {
            model:'departments',
            key:'deptid'
        }
    }
});
//setting One-To-Many relationship for department->employees
Department.hasMany(Employee);

//Exporting 'Employee' table module
module.exports = Employee;
