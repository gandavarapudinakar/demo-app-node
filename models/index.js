var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
const mongodb = require('mongodb');
const db = {};

const sequelize=new Sequelize(process.env.DB_NAME||'testDemo',process.env.DB_USER||'root',process.env.DB_PASS||'zessta',
    {
        dialect: "mysql",
        host:"localhost"
    });
fs.readdirSync(__dirname)
    .filter((file) =>
        file !=='index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
mongodb.connect('mongodb://localhost:27017/mydb',(err,dbclient)=>{
    if (err) throw err;
    console.log("Database created!");
    dbclient.db('mydb1').createCollection('users',(err,collection)=>{if (err) throw err;
        console.log("collection created!");
        //console.log(collection);
    })
})
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports=db;