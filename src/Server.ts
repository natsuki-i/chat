import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server , path: '/socket'});

wss.on('connection', (ws: WebSocket) => {
    console.log(ws);
    ws.on('message', (message) => {
        wss.clients.forEach((o: WebSocket) => {
            o.send(message);
        });
        console.log('received: %s', message)
    });
});

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log("server listening on port 3000");
});
