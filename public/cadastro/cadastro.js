document.addEventListener('DOMContentLoaded', function() {

  const exibirCadastro = document.getElementById('exibirCadastro');

  const cadastroLogin = document.querySelector('.login-cadastro');
  const loginInicio = document.querySelector('.pagina_cadastro');
  const foter = document.querySelector('.foter')

  if (exibirCadastro && cadastroLogin) {
    exibirCadastro.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do link (neste caso, redirecionamento)

      cadastroLogin.style.display = 'block';
      foter.style.position = 'relative'
      loginInicio.style.display = 'none'
    });
  }

  const formularioCadastro = document.getElementById('formularioCadastro');

  formularioCadastro.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os dados do formulário
    const formData = new FormData(formularioCadastro);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Enviar os dados para o backend
    fetch('/enviar-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    .then(response => {
      // Lidar com a resposta do servidor
      alert('Dados enviados com sucesso!');
      // Você pode redirecionar o usuário ou fazer qualquer outra coisa após o envio bem-sucedido
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
    });
  });

});