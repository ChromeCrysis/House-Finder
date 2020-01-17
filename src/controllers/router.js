const express = require('express')
const app = express()
const router = express.Router()

//Rota inicial
router.get('/', async (req, res) => {
    res.render('home')
})
router.get('/login', async (req,res) =>{
    res.render('login')
})
router.get('/cadastro', async (req,res) =>{
    res.render('cadastro')
})
router.get('/home', async (req, res) =>{
    res.render('home')
})
router.get('/quem-somos', async (req, res) => {
    res.render('quem_somos')
})
router.get('/produtos-e-servicos', async (req,res) =>{
    res.render('produtos_servicos')
})
router.get('/cadastro-de-imoveis', async (req, res) =>{
    res.send('Cadastre seu Imovel aqui!!!')
})

module.exports = router
