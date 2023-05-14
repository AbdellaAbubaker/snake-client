const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Rest of the connect function code...

  return conn;
};

module.exports = connect;



const IP = '127.0.0.1';
const PORT = 50541;

module.exports = {
  IP,
  PORT,
};