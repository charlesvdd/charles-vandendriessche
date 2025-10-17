// server.js
const { createServer } = require('http');
const next = require('next');

const dev = false;
const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOST || '0.0.0.0';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, host, () => {
    console.log(`> Ready on http://${host}:${port}`);
  });
});
