
const { Socket } = require("dgram");

const app = require("express")();
const Server = require("http").createServer(app);
const cors = require("cors");

const io = require("Socket.io")(Server, {
    cors: {
        origin:  "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
const PORT = process.env.PORT || 4002;

app.get("/", (req, res)  => {
    res.send('Server is running');
});



// sockets are used for real time data transmission that data can be messages ,audio ore video 
io.on('connection' , (socket)  => {
    socket.emit('me' , socket.id);
    // socket id is simply going to give us our own id on the frontend side of the thing
    socket.on('disconnect', ()   => {
        // disconnect simply broadcast the messege
        socket.broadcast.emit('callended')
    });
    socket.ion("calluser", ({ userToCall , signalData , from , name}) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name});

    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);

    });
  
    });

Server.listen(PORT, () => console.log('Server listening on port ${PORT}'));


