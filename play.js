const net = require("net");
const { connect } = require('./client');


// establishes a connection with the game server
  let conn = connect()
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume(); 
    stdin.on("data", (data) => {
    handleUserInput(data);
    });
    
    return stdin;

  };

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      return process.exit();
    }
   
  };
 
setupInput();

console.log("Connecting ...");

module.exports = { setupInput };



