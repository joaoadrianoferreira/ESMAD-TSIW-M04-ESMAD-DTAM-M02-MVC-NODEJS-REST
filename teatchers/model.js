const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('joaoferr_dtam', 'joaoferr_dtam', '5SNhnBGKPUJTYy2M', {
    host: 'www.joaoferreira.eu',
    dialect: 'mysql'
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