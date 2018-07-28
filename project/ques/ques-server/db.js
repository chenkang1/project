const Sequelize = require('sequelize')
module.exports = new Sequelize('qita', 'root', '', {
  host: '47.100.115.231',
  dialect: 'mysql',
  operatorsAliases: false,
  define:{
    freezeTableName:true,
    timestamps: false,    
  }
})