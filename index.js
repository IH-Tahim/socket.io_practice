const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
let io = new Server(expressServer);



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on('connection', (socket) => {
    console.log("new device found");
})



expressServer.listen(5000, () => {
    console.log("running on port:", 5000);
});