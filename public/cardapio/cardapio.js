window.addEventListener("load", main);

// const classicas = [
//   {
//     id:3,
//     img: "../images/pizza2.png",
//     nome: "Pizza Veggie",
//     descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
//     preco: "69,99"
//   },
//   {
//     id:4,
//     img: "../images/pizza_cogumelo.png",
//     nome: "Pizza de Cogumelo",
//     descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
//     preco: "76,50"
//   },
//   {
//     id:5,
//     img: "../images/pizza_extravaganzza.png",
//     nome: "Pizza de Etravaganzza",
//     descricao: "Queijo, pepperoni, presunto, azeitona preta, champignon, cebola, oregano e pimentão.",
//     preco: "80,99"
//   },
//   {
//     id:6,
//     img: "../images/pizza2.png",
//     nome: "Pizza Veggie",
//     descricao: "Queijo, champignon, azeitona preta, cebola, oregano e pimentão verde.",
//     preco: "99,99"
//   }
// ]

async function main(){
  const div = document.getElementById("mais_pedidas")

  const response = await fetch('http://localhost:3000/pizza/mais_pedidas')
  const data = await response.json()
  mais_pedidas = data

  for(let x = 0; x < mais_pedidas.length; x++){
    const section = document.createElement("section");
    const img = document.createElement("img");
    const nome = document.createElement("h3");
    const descricao = document.createElement("p");
    const preco = document.createElement("h4")
    const butao = document.createElement("button");

    section.id = mais_pedidas[x].id;
    img.width = "275";
    img.height = "275";
    img.src = mais_pedidas[x].img;
    nome.textContent = mais_pedidas[x].nome;
    descricao.textContent = mais_pedidas[x].descricao;
    preco.textContent = `R$ ${mais_pedidas[x].preco}`
    butao.textContent = "Adicionar ao carrinho";
    butao.addEventListener("click", adicionarAoCarrinho);

    section.appendChild(img);
    section.appendChild(nome);
    section.appendChild(descricao);
    section.appendChild(preco);
    section.appendChild(butao);

    div.appendChild(section);
  }

  exibirClassicas();
}

async function exibirClassicas(){
  const div2 = document.getElementById("classicas")

  const response = await fetch('http://localhost:3000/pizza/classicas')
  const data = await response.json()
  classicas = data

  for(let x = 0; x < classicas.length; x++){
    const section = document.createElement("section");
    const img = document.createElement("img");
    const nome = document.createElement("h3");
    const descricao = document.createElement("p");
    const preco = document.createElement("h4")
    const butao = document.createElement("button");

    section.id = classicas[x].id;
    img.width = "275";
    img.height = "275";
    img.src = classicas[x].img;
    nome.textContent = classicas[x].nome;
    descricao.textContent = classicas[x].descricao;
    preco.textContent = `R$ ${classicas[x].preco}`
    butao.textContent = "Adicionar ao carrinho";
    butao.addEventListener("click",adicionarAoCarrinho)

    section.appendChild(img);
    section.appendChild(nome);
    section.appendChild(descricao);
    section.appendChild(preco);
    section.appendChild(butao);

    div2.appendChild(section);
  }
}

function adicionarAoCarrinho(evento){
  const id = evento.target.parentElement.id;

  const elemento = procurarElemento(id);

  if(elemento != null){

    const itemCarrinho = {
      id: elemento.id,
      img: elemento.img,
      nome: elemento.nome,
      descricao: elemento.descricao,
      preco: elemento.preco
    }
    console.log(itemCarrinho)

    let carrinho = sessionStorage.getItem('carrinho');

    if (carrinho) {
      carrinho = JSON.parse(carrinho);
    } else {
      carrinho = [];
    }

    carrinho.push(itemCarrinho);

    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  }
}

function procurarElemento(id) {
  for (let x = 0; x < mais_pedidas.length; x++) {
    if (mais_pedidas[x].id == id) {
      return mais_pedidas[x];
    }
  }
  for (let x = 0; x < classicas.length; x++) {
    if (classicas[x].id == id) {
      return classicas[x];
    }
  }
  return null;
}