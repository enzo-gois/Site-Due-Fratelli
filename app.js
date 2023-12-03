const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing', 'index.html'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let usuariosCadastrados = [];

app.post('/enviar-dados', (req, res) => {
  const usuarios = req.body;
  console.log(usuarios)
  usuariosCadastrados.push(usuarios)
  res.status(200).json({message: 'Dados recebidos com sucesso'});
});

app.post('/verificar-login', (req, res) => {
  const { email, senha } = req.body;
  const usuarioEncontrado = usuariosCadastrados.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
    console.log(usuarioEncontrado.nome,usuarioEncontrado.email);
  } else {
    res.status(401).json({ message: 'Usuário não encontrado' });
  }
});

const pizzaRoutes = require('./src/routes/pizzaRouter');
app.use('/pizza', pizzaRoutes);

const classicRoutes = require('./src/routes/classicRoutes');
app.use('/pizza', classicRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});