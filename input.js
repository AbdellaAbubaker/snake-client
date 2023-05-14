let connection;

const handleUserInput = function (key) {
    if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "h") {
      connection.write("Say: Hello!");
    } else if (key === "g") {
      connection.write("Say: Good game!");
    } else if (key === "n") {
      connection.write("Say: Nice to meet you!");
    } else if (key === "\u0003") {
      process.exit();
    }
  };
  

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



  
  
  module.exports = { setupInput };