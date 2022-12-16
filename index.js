const express = require("express");
const { WebSocketServer } = require("ws");
const app = express()

app.use(express.static("public"));

app.listen(8000, () => {
    console.log('My web application is listening on the port 8000!');
});



const wss = new WebSocketServer({ port: 8001 });

wss.on("connection", (ws, request) => {


    ws.on("message", (data) => {
        wss.clients.forEach(client => {
            client.send(data.toString());
        });
    });

    ws.on("close", () => {
        wss.clients.forEach(client => {
            client.send(`One user disconnected. Now we have ${wss.clients.size} users.`)
        });
    })

    wss.clients.forEach(client => {
        client.send(`New used has connected. Now we have ${wss.clients.size} users.`)
    });

    console.log(`New user has connected: ${request.socket.remoteAddress}`)


});







