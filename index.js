const express = require('express')
const app = express()
const { serverSetup, getAll } = require('./controllers/favShows')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', serverSetup)
app.use(express.json())

app.get('/shows', getAll)
app.get('/documentation/get', (req, res) => {
    return res.render('get')
})
app.get('/documentation/delete', (req, res) => {
    return res.render('delete')
})
app.get('/documentation/post', (req, res) => {
    return res.render('post')
})
app.get('/documentation/api', (req,res) => {
    return res.render('api')
}
)

app.listen(1337, () => {
    console.log('Yay, our server is running!')
})
