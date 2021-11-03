const net = require("net");
const { host, port } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: host,
    port: port

  });
conn.setEncoding("utf8")

conn.on("connect", () => {
  console.log("Connected");
  conn.write("Name: A.A.");

//   setTimeout(() => {
//     conn.write("Move: up");
//   }, 2000)
//   setTimeout(() => {
//     conn.write("Move: right");
//   }, 4000)
});
 

conn.on('data', data => {
  console.log(data);
});

  return conn;
};


  module.exports = { connect };
