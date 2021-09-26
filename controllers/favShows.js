const models = require('../models')
const favShows = require('../favShows')

const serverSetup = (req, res) => {
    return res.render('index', { favShows })
}

const getAll = (req, res) => {


      return res.send(favShows)
      }




module.exports = { serverSetup, getAll }