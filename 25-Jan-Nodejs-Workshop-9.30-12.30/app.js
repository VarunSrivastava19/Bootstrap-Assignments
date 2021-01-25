const express = require('express');
const sequel = require('./utils/database');  //db connection pool managed sequelize
const Employee = require('./models/employee');
const Department = require('./models/department');
let app = express();
let port = 8080;

//Create 2 new employees in Employee table in database.
app.post('/Employee', (req, res)=>{
    //creating a new employee Jane
    const doug = Employee.create({empid:2, empname:'Doug', empsalary:30000, empdesgn:'Software Engineer', dept:2});
    const jane = Employee.create({empid:1, empname:'Jane', empsalary:35000, empdesgn:'Software Engineer', dept:2});
});

//print all employees
app.get('/Employees', (req, res)=>{
    
    Employee.findAll().then(employees => res.json(employees));  //Print the output in JSON format
    
});

//print employee whose empid is given.
app.get('/Employee/:empid', (req, res)=>{
    Employee.findAll({where:{empid:req.params.empid}}).then(employee => res.json(employee));  //Print the output in JSON format
    
});

//Update employee information for employee 'empid'
app.post('/Employee/:empid/update', (req, res)=>{
    //since empid is primary key, we can use .findByPk() method.
    Employee.findByPk(req.params.empid).then((employee)=>{
        employee.update({
            empname: 'Maya',
            empsalary: 45000,
            empdesgn: 'Android Developer',
            deptid: 2
        });
    });
});


//Department table:

//POST to Department
app.post('/Department', (req, res)=>{
    //creating 4 different departments
    const hr = Department.create({deptid:1, deptname:'HR'});
    const dev = Department.create({deptid:2, deptname:'Development'});
    const qa = Department.create({deptid:3, deptname:'QA'});
    const admin = Department.create({deptid:4, deptname:'Admin'});
});

//Get all Departments
app.get('/Departments', (req, res)=>{
    Department.findAll().then(departments => res.json(departments));  //Print the output in JSON format
});

//Get Department 'deptid'
app.get('/Department/:deptid', (req, res)=>{
    Department.findAll({where:{deptid:req.params.deptid}}).then(department => res.json(department));  //Print the output in JSON format
});

//Update department information for department 'deptid'
app.post('/Department/:deptid/update', (req, res)=>{
    //since empid is primary key, we can use .findByPk() method.
    Department.findByPk(req.params.deptid).then((department)=>{
        department.update({
            deptname: 'Testing QA'
        });
    });
});


sequel.sync(); //sunc the db

sequel.sync({force:true}); //force sync db, basically drop the table(s) and (re)create them again.

//starting listening port for app
app.listen(port, (err)=>{
    if(err) throw err;
    console.log('Server listening at port ',port);
});