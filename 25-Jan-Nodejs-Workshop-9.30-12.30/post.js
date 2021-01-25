const express = require('express');
const fs = require('fs');
let app = express();
// app.use(express.static('public'));
let user = {
    "user6":{
        "name": "Lamar Davis",
        "password": "FranklinRoasted88",
        "profession": "Manager",
        "id": 6
    }
}

app.get('/User', (req,res)=>{
    fs.readFile('./users.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        
        console.log(data);
        res.send(JSON.stringify(data, null, 2));
    });
});

app.post('/User', (req,res)=>{
    fs.readFile('./users.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        data["user6"] = user["user6"]
        res.status(201).send(fs.writeFile('users.json', JSON.stringify(data, null, 2), (err)=>{
            if (err) throw err;
            console.log('Data sucessfully posted. \n');
        }));
    });
});


app.delete('/User/:userid', (req,res)=>{  //TYPE user<id> INSTEAD OF id ONLY FOR DELETING
    let id = req.params.userid;
    
    fs.readFile('./users.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        // console.log(data["ix"]);
        data = JSON.parse(data);
        
        delete data[id];
       
        res.status(204).send();
        fs.writeFile('users.json', JSON.stringify(data, null, 2), (err)=>{
            if (err) throw err;
        });
    });
});

app.put('/User/:userid', (req,res)=>{
    let id = req.params.userid;
    fs.readFile('users.json', 'utf-8', (err,data)=>{
        if (err) throw err;
        data = JSON.parse(data);
        // data[id].name = 'Franklin';
        data[id].profession = 'Sgt. Special Air Support';
        // data[id].password = 'FPSSurvival101';
        // data[id].id = 6;
        res.status(202).send();
        fs.writeFile('users.json', JSON.stringify(data, null, 2), (err)=>{
            if (err) throw err;

        });
    });
});


app.listen(8011, ()=>{
    console.log('App listening....');
});