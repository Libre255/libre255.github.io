const express = require('express')
const {getCards} = require('./getCards')

const cardsAPI = express.Router();

cardsAPI.get('/', (req, res)=>{
  getCards().then(cardsArray => res.json(cardsArray)).catch(error => res.status(404).json('Didnt work fetching my array :C'))
})


module.exports = cardsAPI