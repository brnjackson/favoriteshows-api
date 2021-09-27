const models = require('../models')

const serverSetup = (req, res) => {
    return res.send('Welcome!')
}

const getAll = async (req, res) => {
    const hulu = await models.Hulu.findAll()
    const netflix = await models.Hulu.findAll()
    const starz = await models.Starz.findAll()
    
    return res.send( { hulu, netflix, starz } )
}

const getHulu = async (req, res) => {
    const huluShows = await models.Hulu.findAll()

    return res.send(huluShows)
}

const newHuluShow = async (req, res) => {
    const { title, numberofEps, starring, favCharacter } = req.body

    if (!title || !numberofEps || !starring || !favCharacter) {
        return res.status(400).send('fields required: title, numberofEps, starring, favCharacter')
    }

    const newHulu = await models.Hulu.create({
        title, numberofEps, starring, favCharacter
    })

    res.send(newHulu)
}

const deleteHuluById = async (req, res) => {
    const { id } = req.params
    const shows = await models.Hulu.findOne({ where: { id }})
    
    let deletedShow = {}

    if(shows) {
        deletedShow = await shows.destroy()
    
        return 'Show has been deleted' }
        else{
            return 'show does not exist'
        }
}

module.exports = { serverSetup, getHulu, getAll, newHuluShow, deleteHuluById }
