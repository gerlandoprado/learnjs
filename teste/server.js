// Usando CommonJS para importar o módulo HTTP
const http = require('http');

const resjson = JSON.stringify({ 
  message: 'Ola Mundo!',
  number: 412
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'application/json' 
  });
  res.end(resjson);
});

// Inicia um servidor HTTP simples na porta 3000
server.listen(80, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});