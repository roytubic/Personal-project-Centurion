const path = require('path')
const express = require('express')

const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
server.get('/api/v1/quotes', (req,res)=>{
    request
    .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')    // api url 
    .then(response => {
        // console.log(response.text)
        let data = response.text
        let string = data.substring(1)
        let quote = string.substring(0, string.length -1)
        // console.log(data)
        res.send(quote)
     })
})