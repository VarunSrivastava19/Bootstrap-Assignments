const express = require('express');
const Sequelize = require('sequelize');
const dbconf = require('./dbconf.json');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

let password = dbconf.password;
let sequel = new Sequelize(
    dbconf.database,
    dbconf.user,
    dbconf.password, {
        dialect: 'mysql',
        logging: console.log,
        define: {
            timestamps: false,
            id: false
        }
    }
);

const app = express();
const port = 8000;
let router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let userModel = sequel.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: Sequelize.CHAR,
    email: Sequelize.CHAR,
    password: Sequelize.CHAR,
    address: Sequelize.CHAR,
    phone: Sequelize.CHAR
});
//API
app.use('/api', router);
//GET
router.get('/users', (req, res)=>{
    userModel.findAll()
        .then((users)=>{
            res.status(200).json(users);
        },(err)=>{
            res.status(500).send(err);
        });
});
//GET BY ID
router.get('/users/:id',(req, res)=>{
    userModel.findAll({
        where:{
            id:req.params.id
        }
    })
        .then((users)=>{
            res.status(200).json(users);
        },(err)=>{
            if(err) throw err;
            res.status(500).send(err);
        });
});
//POST
router.post('/users/', (req,res)=>{
    const paramdata = req.body;
    console.log(paramdata);
    userModel.create(paramdata)
        .then((users)=>{
            res.status(201).json(users);
        }, (err)=>{
        
            res.status(500).send(err);
        });
});
//PUT
router.put('/users/:id',(req,res)=>{
    let data = {
        id:req.params.id,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        phone:req.body.phone
    };
    userModel.update(data, {
        where:{
            id:data.id
        }
    })
        .then((user)=>{
            res.status(201).json(user);
        },(err)=>{
            res.status(400).send(err);
        });
});
//DELETE
router.delete('/users/:id', (req,res)=>{
    let data = {
        id:req.params.id
    };
    userModel.destroy({
        where:{
            id:data.id
        }
    })
        .then((user)=>{
            res.status(410).json(user);
        },(err)=>{
            res.status(405).send(err);
        });
});

app.listen(port, (err)=>{
    if(err) throw err;
    console.log('API Running on port :', port);
});
