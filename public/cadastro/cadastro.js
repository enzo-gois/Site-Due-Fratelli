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

  cadastraUsuario();
});

function cadastraUsuario(){
  const btnCriarConta = document.getElementById('butaoConfirma');

  // Adicionando um evento de clique ao botão
  btnCriarConta.addEventListener('click', function() {
    // Obtendo os valores dos campos de entrada
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const cemail = document.getElementById('cemail').value;
  
    // Criando um objeto com os valores obtidos
    const dadosUsuario = {
      senha,
      email,
      cemail,
    };
  
    // Convertendo os dados para formato JSON e armazenando no localStorage
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
  
    // Exemplo de exibição dos dados no console (pode ser removido em produção)
    alert('Dados do usuário armazenados!');
  });
}