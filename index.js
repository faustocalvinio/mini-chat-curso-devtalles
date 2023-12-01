// SERVIDOR EXPRESS
const express = require('express');
const app = express();  
// SERVIDOR DE SOCKET 
const server = require('http').createServer(app);
// CONFIGURACION DEL SOCKET SERVER
const io = require('socket.io')(server);

// DEPLOY PUBLIC DIR

app.use(express.static(__dirname+'/public'));


io.on('connection', (socket) => { 
    console.log(socket.id);
   
    socket.emit('mensaje_bienvenida', {
        msg: `Bienvenido al chat user ${socket.id}`,
        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    });

    socket.on('mensaje_cliente',(data)=>{
        console.log(
            `El servidor dice ${data.nombre} : ${data.msg} a las ${data.date}`
        )
    })


});




// CORRER SERVER
server.listen(8080,()=>console.log('app running on 8080'));