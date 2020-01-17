const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const router = require('./controllers/router')
const admin = require('./controllers/admin')

//Config
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Arquivos estáticos
app.use(express.static('public'))

//Rotas Comuns do Site
app.use('/', router)
//Rotas de Admin
app.use('/admin', admin)

//Definição da porta para subir servidor.
app.listen(3000, () =>{
    console.log("O servidor está rodando em http://localhost:3000")
})