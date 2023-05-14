const net = require("net");

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();
setupInput(conn);

  const stdin = setupInput()

  stdin.on("data", handleUserInput);

connect();

setupInput();