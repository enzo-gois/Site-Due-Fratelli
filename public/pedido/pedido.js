document.addEventListener('DOMContentLoaded', function() {

  const storePickupLink = document.getElementById('pickupLink');
  const deliveryLink = document.getElementById('deliveryLink');

  const cadastroLoginSection = document.querySelector('.cadastro-login');
  const buscaNaLoja = document.querySelector('.buscaNaLoja');
  const foter = document.querySelector('.foter');

  if (deliveryLink && cadastroLoginSection) {
    deliveryLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do link (neste caso, redirecionamento)

      cadastroLoginSection.style.display = 'flex';
      foter.style.position = 'relative';
      buscaNaLoja.style.display = 'none';
    });
  }

  if(storePickupLink && buscaNaLoja){
    storePickupLink.addEventListener('click',function(event){
      event.preventDefault();

      buscaNaLoja.style.display = 'flex';
      foter.style.position = 'fixed';
      cadastroLoginSection.style.display = 'none';
    })
  }

  const continuarButton = document.getElementById('continuar');

  continuarButton.addEventListener('click', function() {

    const ruaValue = document.getElementById('rua').value;
    const numeroValue = document.getElementById('numero').value;
    const complementoValue = document.getElementById('complemento').value;
    const infoValue = document.getElementById('info').value;

    const formData = {
      rua: ruaValue,
      numero: numeroValue,
      complemento: complementoValue,
      info: infoValue
    };

    sessionStorage.setItem('formData', JSON.stringify(formData));

    alert('Dados armazenados no Session Storage!');
  });

  const continuarButton2 = document.getElementById('continuar2');

  continuarButton2.addEventListener('click', function() {

    const selectedOption = document.getElementById('opcao');
    const selectedStoreName = selectedOption.options[selectedOption.selectedIndex].text;

    sessionStorage.setItem('selectedStoreName', selectedStoreName);

    alert('Nome da loja selecionada armazenado no Session Storage!');
  });
  
});