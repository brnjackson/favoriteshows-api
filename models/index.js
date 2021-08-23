const Sequelize = require('sequelize')
const netflix = require('./netflix-shows')

const connection = new Sequelize('favoriteshows', 'favShows', 'TvShow$!', {
    host:'localhost', dialect: 'mysql', define: { timestamps: true }
})

const FavShow = netflix(connection, Sequelize)

module.exports = { FavShow }