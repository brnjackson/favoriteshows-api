'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('netflixshows', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING},
        numberofEps: { type: Sequelize.STRING},
        starring: { type: Sequelize.STRING},
        favCharacter: { type: Sequelize.STRING},
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
        updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('hulushows', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING},
      numberofEps: { type: Sequelize.STRING},
      starring: { type: Sequelize.STRING},
      favCharacter: { type: Sequelize.STRING},
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
    deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('starzshows', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING},
      numberofEps: { type: Sequelize.STRING},
      starring: { type: Sequelize.STRING},
      favCharacter: { type: Sequelize.STRING},
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
    deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('starzshows')
    await queryInterface.dropTable('hulushows')
    await queryInterface.dropTable('netflixshows')
  }
};
