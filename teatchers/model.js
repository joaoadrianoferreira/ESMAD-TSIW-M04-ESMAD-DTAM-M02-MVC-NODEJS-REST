require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

class Teatcher extends Model {}

Teatcher.init({
  name: DataTypes.STRING,
  age: DataTypes.INTEGER
}, { sequelize, modelName: 'teatcher' });

sequelize.sync().then().catch(error => {
    console.log(error); 
})

module.exports = Teatcher; 