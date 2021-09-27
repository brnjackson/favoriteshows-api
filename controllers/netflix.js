const models = require('../models')

const getNetflix = async (req, res) => {
    const netflixShows = await models.Netflix.findAll()

    return res.send(netflixShows)
}

const newNetflixShow = async (req, res) => {
    const { title, numberofEps, starring, favCharacter } = req.body

    if (!title || !numberofEps || !starring || !favCharacter) {
        return res.status(400).send('fields required: title, numberofEps, starring, favCharacter')
    }

    const newNetflix= await models.Netflix.create({
        title, numberofEps, starring, favCharacter
    })

    res.send(newNetflix)
}

const deleteNetflixById = async (req, res) => {
    const { id } = req.params
    const shows = await models.Netflix.findOne({ where: { id }})
    
    let deletedShow = {}

    if(shows) {
        deletedShow = await shows.destroy()
    
        return 'Show has been deleted' }
        else{
            return 'show does not exist'
        }
}

module.exports = { getNetflix, newNetflixShow, deleteNetflixById }

/*{
        "title": "Umbrella Academy",
        "numberofEps": "20",
        "starring": "Elliot Page, Robert Sheehan",
        "favCharacter": "Klaus"
    }

    {
        "title": "Clickbait",
        "numberofEps": "8",
        "starring": "Pia, Sophie",
        "favCharacter": "Cam"
    }
    
    {
        "title": "Catfish",
        "numberofEps": "187",
        "starring": "Nev Schulman, Kami",
        "favCharacter": "Nev"
    }
    {
        "title": "Handmaid's Tale",
        "numberofEps": "46",
        "starring": "Ofglen, Commander ",
        "favCharacter": "Moira"
    }
    {

        "title": "Raising Kanan",
        "numberofEps": "10",
        "starring" : "Kanan, Raq",
        "favCharacter": "Jukebox"
    }

     {
        "title": "Power 2",
        "numberofEps": "10",
        "starring" : "Tariq, Tasha",
        "favCharacter": "Tommy"
    }


    
    */
