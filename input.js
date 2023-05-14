


const handleUserInput = function (key) {
    if (key === "\u0003") {
      // Check for Ctrl + C input
      process.exit();
    }
  };
  
  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };
  
  module.exports = { setupInput };