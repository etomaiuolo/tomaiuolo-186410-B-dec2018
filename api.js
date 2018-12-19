const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")
const https = require("http")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000

const BASE_URL = "http://localhost:3000";


app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.get("/bimbumbam", (req,res) => {
    const number = Math.ceil(Math.random()*5);
    res.json({result: number});
})

app.get("/play", (req, res) => {
    const p2 = Math.ceil(Math.random()*5) ;
    if(req && req.query && req.query.player1){
        
        if(parseInt(req.query.player1)<1 || parseInt(req.query.player1)>5){
            console.log(req.query.player1)
            return res.status(400).json();
        }
        else {
            let sum  = parseInt(p2) + parseInt(req.query.player1);
            console.log(sum)
            let pari = 1;

            if (sum %2 == 0) {
                pari = 0;
            }

            let response = {
                result: pari,
                player2: p2
            }

            return res.status(200).json (response);
        }
    }
    return res.status(400).json();
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


