window.addEventListener("load", () => {
  exibirCarrinho();
  adicionarEventoRemover();
});

let carrinho = JSON.parse(sessionStorage.getItem('carrinho'));

function exibirCarrinho() {

  if (carrinho != null) {
    const itensCarrinho = document.getElementsByClassName("produtos");

    itensCarrinho[0].innerHTML = ''; // Limpa o conteúdo anterior para evitar duplicação

    carrinho.forEach((item, index) => {
      itensCarrinho[0].innerHTML += `
        <div class="product">
          <img width="150px" height="150px" src="${item.img}" alt="">
          <div class="info_produto">
            <h2>${item.nome}</h2>
            <p>${item.descricao}</p>
            <div class="buttons">
              <p>Preço: R$ ${item.preco}</p>
              <button class="remover-item" data-index="${index}">Remover</button>
            </div>
          </div>
        </div>
      `;
    });

    const itensFinais = document.getElementsByClassName("cart-item");
    itensFinais[0].innerHTML = ''; // Limpa o conteúdo anterior para evitar duplicação

    carrinho.forEach(item => {
      itensFinais[0].innerHTML += `
        <div class="infos">
          <p>${item.nome}</p>
          <p>${item.preco}</p>
        </div>
      `;
    });
    calculaTotal();
  }
}

function adicionarEventoRemover() {
  limparEventosRemover(); // Limpa os ouvintes de eventos anteriores

  const botoesRemover = document.querySelectorAll('.remover-item');
  botoesRemover.forEach((botao) => {
    botao.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      removerItemCarrinho(index);
    });
  });
}

function limparEventosRemover() {
  const botoesRemover = document.querySelectorAll('.remover-item');
  botoesRemover.forEach((botao) => {
    botao.removeEventListener('click', () => {});
  });
}

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  exibirCarrinho(); // Atualiza a exibição do carrinho após a remoção do item
  adicionarEventoRemover(); // Adiciona novamente os ouvintes de eventos atualizados
}

document.addEventListener('DOMContentLoaded', function() {
  if(sessionStorage.getItem('selectedStoreName')) {
    const selectedStoreName = sessionStorage.getItem('selectedStoreName');

    const enderecoInformado = document.getElementById('adress');

    enderecoInformado.textContent = `Loja para retirada: ${selectedStoreName}`;
  } else {
    if(sessionStorage.getItem('formData')) {

      const formData = JSON.parse(sessionStorage.getItem('formData'));
  
      const enderecoInformado = document.getElementById('adress');
  
      const enderecoHTML = `
        Rua: ${formData.rua}<br>
        Número: ${formData.numero}<br>
        Complemento: ${formData.complemento}<br>
        Informação adicional: ${formData.info}
      `;
  
      enderecoInformado.innerHTML = enderecoHTML;
    }
  }

});

function calculaTotal(){
  const carrinho = document.querySelector(".cart-item")
  const totalCarrinho = document.querySelector("#total")
  const itensCarrinho = carrinho.querySelectorAll(".infos")

  let total = 0;

  if(itensCarrinho.length > 0){
    itensCarrinho.forEach ((item) => {
      const paragrafos = item.querySelectorAll("p")
      let precos = parseFloat(paragrafos[1].innerText.replace("R$ ", "").replace(",","."))
      total += precos;
    })
  } else{

  }
  totalCarrinho.innerText = ` Total: R$ ${total.toFixed(2)}`
}