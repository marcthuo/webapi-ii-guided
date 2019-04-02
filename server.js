const express = require('express');

// import router
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use('/api/hubs', hubsRouter) // Delegates requests to /api/hubs to the router.

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});


module.exports = server; // CommonJS way of exporting out of a module.

// Same as export default server