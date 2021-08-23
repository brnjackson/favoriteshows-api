const Hulu = (connection, Sequelize) => {
    return connection.define('starz', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        NumberofEps: { type: Sequelize.INTEGER },
        Starring: { type: Sequelize.STRING },
        favCharacter: { type: Sequelize.STRING },
    })
}

module.exports = Hulu