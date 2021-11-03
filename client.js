const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541,// PORT number here,

  });

conn.on("connect", () => {
  console.log("Connected");
  conn.write("Name: Ann");
})

  return conn;
};

  module.exports = { connect };
