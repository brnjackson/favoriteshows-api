const Netflix = (connection, Sequelize) => {
    return connection.define('netflixshows', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true  },
        title: { type: Sequelize.STRING },
        numberofEps: { type: Sequelize.STRING },
        starring: { type: Sequelize.STRING },
        favCharacter: { type: Sequelize.STRING },
    },
    { timestamps: false })
}

module.exports = Netflix