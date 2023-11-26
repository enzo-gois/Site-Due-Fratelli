const express = require('express');
const router = express.Router();

const mais_pedidas = [
  {
    id: 0,
    img: "../images/pizza_calabresa.png",
    nome: "Pizza de Calabresa",
    descricao: "Queijo, calabresa e cebola, oregano.",
    preco: "69,90"
  },
  {
    id: 1,
    img: "../images/pizza_gorgonzola.png",
    nome: "Pizza Gorgonzola",
    descricao: "Mussarela, gorgonzola, tomate e salsa",
    preco: "75,90"
  },
  {
    id: 2,
    img: "../images/pizza_queijo.png",
    nome: "Pizza de Queijo",
    descricao: "Queijo e Manjericão",
    preco: "60,00"
  },
]

router.get('/mais_pedidas', (req, res) => {
  res.json(mais_pedidas);
});

module.exports = router;

// import {Router} from 'express'

// const mais_pedidas = [
//   {
//     id: 0,
//     img: "../images/pizza_calabresa.png",
//     nome: "Pizza de Calabresa",
//     descricao: "Queijo, calabresa e cebola, oregano.",
//     preco: "69,90"
//   },
//   {
//     id: 1,
//     img: "../images/pizza_gorgonzola.png",
//     nome: "Pizza Gorgonzola",
//     descricao: "Mussarela, gorgonzola, tomate e salsa",
//     preco: "75,90"
//   },
//   {
//     id: 2,
//     img: "../images/pizza_queijo.png",
//     nome: "Pizza de Queijo",
//     descricao: "Queijo e Manjericão",
//     preco: "60,00"
//   },
// ]

// export const pizzas1 = Router()


// pizzas1.get('/api/mais_pedidas', (_, res) => {
//   return res.status(200).json(mais_pedidas);
// });