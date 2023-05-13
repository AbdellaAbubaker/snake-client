const net = require("net");
const {connect } = require("./client.js")


const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  const handleUserInput = function (key) {
    if (key === "\u0003") {
        process.exit();
    }
  };

  const conn = connect 
  const stdin = setupInput()

  stdin.on("data", handleUserInput);