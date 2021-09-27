const express = require('express')
const app = express()
const { getHulu, getAll, newHuluShow, deleteHuluById } = require('./controllers/hulu')
const { getNetflix, newNetflixShow, deleteNetflixById } = require('./controllers/netflix')
const { getStarz, newStarzShow, deleteStarzById } = require('./controllers/starz')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.render('index')
})
app.use(express.json())

app.get('/shows/netflix', getNetflix)
app.get('/shows/hulu', getHulu)
app.get('/shows/starz', getStarz)

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

app.post('/shows/netflix', newNetflixShow)
app.post('/shows/hulu', newHuluShow)
app.post('/shows/starz', newStarzShow)

app.delete('/shows/netflix/:id', deleteNetflixById)
app.delete('/shows/hulu/:id', deleteHuluById)
app.delete('/shows/starz/:id', deleteStarzById)

app.listen(1337, () => {
    console.log('Yay, our server is running!')
})
