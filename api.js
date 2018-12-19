const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.get("/bimbumbam", (req,res) => {
    const number = Math.ceil(Math.random()*5);
    res.json({result: number});
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


