const Starz = (connection, Sequelize) => {
    return connection.define('starzshows', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        NumberofEps: { type: Sequelize.INTEGER },
        Starring: { type: Sequelize.STRING },
        favCharacter: { type: Sequelize.STRING },
    },
    { timestamps: false })
}

module.exports = Starz