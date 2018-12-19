const fetch = require("node-fetch");
const root = process.env.SERVER_URL || 'http://127.0.0.1:3000';

test ("/play valid test", () => {
    return fetch (root+"/play?player1=4")
        .then(response => {
            expect(response.status).toBe(200);
        })
})

test ("/play invalid test", () => {
    return fetch (root+"/play?player1=6")
        .then(response => {
            expect(response.status).toBe(400);
        })
})

