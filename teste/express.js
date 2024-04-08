// Importa o módulo Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Define a porta em que o servidor irá escutar
const port = 3000;

// Rota da raiz que responde com "Hello, World!" quando acessada
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Rota '/about' que responde com "About Us" quando acessada
app.get('/about', (req, res) => {
  res.send('About Us');
});

// O servidor começa a escutar as solicitações na porta especificada
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
