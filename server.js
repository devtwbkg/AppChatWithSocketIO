const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', (socket) => {
        console.log('a user disconnected')
    })

    socket.on('chat message', (msg) => {
        console.log('chat message : ' + msg)
        socket.emit('chat message', msg)
    })
})

http.listen(30001, console.log('server started at prot 3000!'))