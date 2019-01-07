var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
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
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports=db;