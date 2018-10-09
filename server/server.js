const app = require('express')()
const server = require('http').Server(app)
var io = require("socket.io")(server);
const next = require('next')
var net = require('net');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

var tcp_port = 1337;
var ui_port = 3000;

var TEST = 1;

if(TEST) {
//tcp socket client
  var client = new net.Socket();
  client.connect(tcp_port, '127.0.0.1', function() {
    console.log('Connected');
  })
}

// socket.io server
io.on('connection', socket => {
  console.log("server socket connect")
  socket.broadcast.emit('message', 'world')

  socket.on('HEY', function (data) {
    console.log(data)
  });

  socket.on('SET_PARAMS', function (data) {
    client.write(data)
  });

  socket.on('START_ROBOT', function (data) {
    client.write(data)
  });

  socket.on('STOP_ROBOT', function (data) {
    client.write(data)
  });

  socket.on('MOVE_LEFT', function (data) {
    client.write(data)
  });

  socket.on('MOVE_RIGHT', function (data) {
    client.write(data)
  });

  socket.on('NEW_PATIENT', function () {
  });

  socket.on('EDIT_PATIENT', function () {
  });

  socket.on('DELETE_PATIENT', function () {
  });

})


nextApp.prepare().then(() => {

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(ui_port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})


