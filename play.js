const net = require("net");
const { connect } = require('./client');
const { setupInput } = require("./input");



// establishes a connection with the game server
  let conn = connect()
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


console.log("Connecting ...");




