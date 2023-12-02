document.addEventListener('DOMContentLoaded', function() {

  const exibirCadastro = document.getElementById('exibirCadastro');

  const cadastroLogin = document.querySelector('.login-cadastro');
  const loginInicio = document.querySelector('.pagina_cadastro');
  const foter = document.querySelector('.foter')

  if (exibirCadastro && cadastroLogin) {
    exibirCadastro.addEventListener('click', function(event) {
      event.preventDefault(); 

      cadastroLogin.style.display = 'block';
      foter.style.position = 'relative'
      loginInicio.style.display = 'none'
    });
  }

  const formularioCadastro = document.getElementById('formularioCadastro');

  formularioCadastro.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formularioCadastro);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch('/enviar-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    .then(response => {
      alert('Dados enviados com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
    });
  });

  const formularioLogin = document.getElementById('formularioLogin');

  formularioLogin.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const data = { email, senha };

  fetch('/verificar-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    })
    .catch((error) => {
      console.error('Erro ao fazer login:', error);
    });
});

});