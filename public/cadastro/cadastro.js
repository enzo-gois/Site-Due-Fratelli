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
});