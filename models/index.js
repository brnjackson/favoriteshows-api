const Sequelize = require('sequelize')
const allConfig = require('../config/sequelize')
const netflix = require('./netflix-shows')
const hulu = require('./hulu-shows')
const starz = require('./starz-shows')



const environment = process.env.NODE_ENV || 'development'
const { database, username, password } = allConfig[environment]

const connection = new Sequelize(database, username, password, { 
    host: 'localhost', 
    dialect: 'mysql' })

const Netflix = netflix(connection, Sequelize)
const Hulu = hulu(connection, Sequelize)
const Starz = starz(connection, Sequelize)


module.exports = { Netflix, Hulu, Starz }