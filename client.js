const net = require('net');
const connect = function () {
    const conn = net.createConnection({
        host: 'localhost',
        port: '50541'
    });
    conn.on("data", (data) => {
        console.log("Server says:", data);
    });

    // Handle successful connection
    conn.on("connect", () => {
        console.log("Successfully connected to game server");
        conn.write("Name: SNK"); // Replace SNK with your desired initials
    });
};
module.exports = {
    connect
}