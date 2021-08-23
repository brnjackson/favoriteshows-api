const express = require('express')
const app = express()
const { serverSetup, getAll } = require('./controllers/favShows')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', serverSetup)
app.use(express.json())

app.get('/shows', getAll)
app.get('/api', (req,res) => {
    return res.render('api')
}
)

app.listen(1337, () => {
    console.log('Yay, our server is running!')
})
