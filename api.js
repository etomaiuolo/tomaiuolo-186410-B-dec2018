const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000

const BASE_URL = "https://tomaiuolo-186410-b-dec2018.herokuapp.com";


app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.get("/bimbumbam", (req,res) => {
    const number = Math.ceil(Math.random()*5);
    res.json({result: number});
})

app.get("/play", (req, res) => {
    let player = await fetch (BASE_URL+"/bimbumbam");

    let sum  = player + req.query.player;
    let pari = 1;

    if (sum %2 == 0) {
        pari = 0;
    }

    let response = {
        result: pari,
        player2: player
    }

    res.json (response);
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


