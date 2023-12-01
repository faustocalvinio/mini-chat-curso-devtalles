// SERVIDOR EXPRESS
const express = require('express');
const app = express();  
// SERVIDOR DE SOCKET 
const server = require('http').createServer(app);
// CONFIGURACION DEL SOCKET SERVER
const io = require('socket.io')(server);

// DEPLOY PUBLIC DIR

app.use(express.static(__dirname+'/public'));


io.on('connection', () => { 
    console.log('an user has connected');
});


// CORRER SERVER
server.listen(8080,()=>console.log('app running on 8080'));