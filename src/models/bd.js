// Arquivo de conexão com o banco de dados
const Sequelize = require('sequelize')

const sequelize = new Sequelize('housefinder', 'root', 'admin', {
    host: 'localhost',
    dialet: 'mysql'
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
