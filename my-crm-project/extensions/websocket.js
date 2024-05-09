const WebSocket = require('ws');

module.exports = strapi => {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', async function connection(ws) {
    // Retrieve data from the database
    const messages = await strapi.query('message').find();

    ws.on('message', async function incoming(message) {
         const content = message.toString();

         console.log(content);

        //Store data in the database
        await strapi.query('message').create( {content} );
        
        // Echo the received message..
        ws.send(content);
    });
  });

  // Attach WebSocket server to Strapi's HTTP server
  strapi.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
};
