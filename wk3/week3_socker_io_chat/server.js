const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello to Socket.IO Server');
})


const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

const serverIO = require('socket.io')(server);

serverIO.on('connection', (socket) => {
    console.log(`A new user connected: ${socket.id}`);

    //Listen to message from clients
    socket.on('message', (data) => {
        console.log('Message recieved:', data);
        //Broadcast the message to all clients
        //serverIO.emit('message', data);

        //Broadcast to all clients except the sender
        //socket.broadcast.emit('message', data); 

        // Send back to sender as well
        socket.emit('message', data)
    });

    // Group chat functionality
    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room: ${room}`);
    });

    socket.on('roomMessage', ({ room, message }) => {
        console.log(`Message to room ${room}: #{message}`);
        serverIO.to(room).emit('roomMessage', { sender: socket.id, message});
    });

    // leave room
    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room: ${room}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`A user disconnected ${socket.id}`)
    });
});