
function voltarParaIndex() {
  window.location.href = "/inicio.html";
};

document.getElementById('formLogin').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a submissão padrão do formulário

  // Obtém os valores dos campos de entrada
  const username = document.getElementById('login').value;
  const password = document.getElementById('senha').value;

  // Verifica as credenciais
  if (username === 'infratech@gmail.com' && password === '123') {
      // Redireciona para o portal
      window.location.href = '/portal.html';
  } else {
      // Exibe uma mensagem de erro (opcional)
      alert('Credenciais inválidas. Tente novamente.');
      window.location.href = '/login.html'
  }
});

function removerValores() {
    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';
}

