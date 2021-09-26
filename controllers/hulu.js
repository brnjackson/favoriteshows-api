const Hulu = (connection, Sequelize) => {
    return connection.define('hulu', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING},
        numberofEps: { type: Sequelize.STRING},
        starring: { type: Sequelize.STRING},
        favCharacter: { type: Sequelize.STRING}
    }, { paranoid: true })
}

module.exports = Hulu