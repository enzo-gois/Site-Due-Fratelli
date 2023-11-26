const express = require('express');
const router = express.Router();

const classicas = [
  {
    id: 3,
    img: "../images/pizza2.png",
    nome: "Pizza Veggie",
    descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
    preco: "69,99"
  },
  {
    id: 4,
    img: "../images/pizza_cogumelo.png",
    nome: "Pizza de Cogumelo",
    descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
    preco: "76,50"
  },
  {
    id: 5,
    img: "../images/pizza_extravaganzza.png",
    nome: "Pizza de Etravaganzza",
    descricao: "Queijo, pepperoni, presunto, azeitona preta, champignon, cebola, oregano e pimentão.",
    preco: "80,99"
  },
  {
    id: 6,
    img: "../images/pizza2.png",
    nome: "Pizza Veggie",
    descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
    preco: "99,99"
  }
];

// Rota para retornar a lista de pizzas clássicas
router.get('/classicas', (req, res) => {
  res.json(classicas);
});

module.exports = router;