const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = 80;

// Permite que o Express entenda JSON no corpo das requisições
app.use(express.json());

app.use((req, res, next) => {
    // Sobrescreve o cabeçalho Date com a data e hora atual em GMT-3
    res.setHeader('Date', moment().tz('America/Sao_Paulo').format('ddd, DD MMM YYYY HH:mm:ss [GMT-3]'));
    res.header("Access-Control-Allow-Origin", "*"); // "*" permite a qualquer origem
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/time', (req, res) => {
    res.json(moment().tz('America/Sao_Paulo').format('HH:mm:ss'));
});

// GET /users - Retorna um usuário pelo ID de consulta
app.get('/uss', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.query.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });

// Simulando um banco de dados simples com um array
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

function getUsers(req, res) {
  res.json(users);
}

// GET /users - Retorna todos os usuários
app.get('/users', getUsers);

// GET /users/:id - Retorna um usuário pelo ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});
  
// POST /users - Cria um novo usuário
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).send(user);
});

// PUT /users/:id - Atualiza um usuário pelo ID
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE /users/:id - Remove um usuário pelo ID
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
