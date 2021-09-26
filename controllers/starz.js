const Starz = (connection, Sequelize) => {
    return connection.define('starz', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING},
        numberofEps: { type: Sequelize.STRING},
        starring: { type: Sequelize.STRING},
        favCharacter: { type: Sequelize.STRING}
    }, { paranoid: true })
}

module.exports = Starz