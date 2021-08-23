const models = require('../models')
const favShows = require('../favShows')

const serverSetup = (req, res) => {
    return res.render('index', { favShows })
}

const getAll = async (req, res) => {
      const netflix = await models.FavShow.findAll()

      return res.send(netflix)
      }

module.exports = { serverSetup, getAll }