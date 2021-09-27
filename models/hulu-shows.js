const Hulu = (connection, Sequelize) => {
    return connection.define('hulushows', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        numberofEps: { type: Sequelize.INTEGER },
        starring: { type: Sequelize.STRING },
        favCharacter: { type: Sequelize.STRING },
    },
    { timestamps: false })
}

module.exports = Hulu