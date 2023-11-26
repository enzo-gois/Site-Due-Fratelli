const express = require('express');
const path = require('path');
const app = express();

// Define o diretório dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing', 'index.html'));
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

// const express = require('express');
// const path = require('path');

// const app = express();

// // Define o diretório dos arquivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

// // Rota para a página inicial
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public','landing','index.html'));
// });

// const port = 3000; // Porta do servidor

// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}/`);
// });