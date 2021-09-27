const models = require('../models')

const getStarz = async (req, res) => {
    const starzShows = await models.Starz.findAll()

    return res.send(starzShows)
}

const newStarzShow = async (req, res) => {
    const { title, numberofEps, starring, favCharacter } = req.body

    if (!title || !numberofEps || !starring || !favCharacter) {
        return res.status(400).send('fields required: title, numberofEps, starring, favCharacter')
    }

    const newStarz = await models.Starz.create({
        title, numberofEps, starring, favCharacter
    })

    res.send(newStarz)
}

const deleteStarzById = async (req, res) => {
    const { id } = req.params
    const shows = await models.Starz.findOne({ where: { id }})
    
    let deletedShow = {}

    if(shows) {
        deletedShow = await shows.destroy()
    
        return 'Show has been deleted' }
        else{
            return 'show does not exist'
        }
}

module.exports = { getStarz, newStarzShow, deleteStarzById }
