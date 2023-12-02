const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

// Define o diretório dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing', 'index.html'));
});

app.use(bodyParser.json());

app.post('/enviar-dados', (req, res) => {
  const usuarios = req.body; // Dados do formulário enviados pelo cliente // Exibe os dados no console do servidor
  console.log(usuarios)

  res.status(200).json({ message: 'Dados recebidos com sucesso!' });
});

// Importa e usa as rotas de pizza
const pizzaRoutes = require('./src/routes/pizzaRouter');
app.use('/pizza', pizzaRoutes);

const classicRoutes = require('./src/routes/classicRoutes');
app.use('/pizza', classicRoutes);

const port = 3000; // Porta do servidor

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});