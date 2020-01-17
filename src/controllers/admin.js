const express = require('express')
const app = express()
const admin = express.Router()

//Rota inicial
admin.get('/', (req, res) =>{
    res.send('PAGINA DE ADM INICIAL!!!')
})

module.exports = admin