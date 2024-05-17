function controleO() {
    window.location.href = "/controledeobras.html"
}

function controleM() {
    window.location.href = "/controledemateriais.html"
}

function logout() {
    window.location.href = "/inicio.html"
}


document.addEventListener("DOMContentLoaded", function() {
    // Obtém o nome da página atual
    var paginaAtual = window.location.pathname.split("/").pop();

    // Verifica se a página atual corresponde à página em que você deseja que o botão seja "selecionado"
    if (paginaAtual === "controledeobras.html") {
        // Adiciona a classe "selecionado" ao botão
        document.getElementById("btnobras").classList.add("selecionado");
    }
    if (paginaAtual === "controledemateriais.html") {
        // Adiciona a classe "selecionado" ao botão
        document.getElementById("btnmateriais").classList.add("selecionado");
    }
    if (paginaAtual === "relatorio.html") {
        // Adiciona a classe "selecionado" ao botão
        document.getElementById("btnrelatorio").classList.add("selecionado");
    }
}); 