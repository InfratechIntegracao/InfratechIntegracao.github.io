document.addEventListener("DOMContentLoaded", function() {
    // Carrega os dados armazenados no localStorage
    carregarDados();
});

function adicionarDado() {
    var material = document.getElementById("material").value;
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;

    // Adiciona nova linha à tabela
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + material + "</td><td>" + quantidade + "</td><td>" + preco + "</td>";
    document.getElementById("data-table").getElementsByTagName('tbody')[0].appendChild(newRow);

    // Salva os dados no localStorage
    salvarDadoLocalStorage(material, quantidade, preco);

    // Limpa os campos de entrada
    document.getElementById("material").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

function salvarDadoLocalStorage(material, quantidade, preco) {
    var dados = JSON.parse(localStorage.getItem("dadosTabela")) || [];
    dados.push({ material: material, quantidade: quantidade, preco: preco });
    localStorage.setItem("dadosTabela", JSON.stringify(dados));
}

function carregarDados() {
    var dados = JSON.parse(localStorage.getItem("dadosTabela")) || [];
    dados.forEach(function(dado) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = "<td>" + dado.material + "</td><td>" + dado.quantidade + "</td><td>" + dado.preco + "</td>";
        document.getElementById("data-table").getElementsByTagName('tbody')[0].appendChild(newRow);
    });
}

document.getElementById("btnImprimirPDF").addEventListener("click", function() {
    imprimirPDF();
});

function imprimirPDF() {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    doc.text("Lista de Dados", 10, 10);

    var dados = JSON.parse(localStorage.getItem("dadosTabela")) || [];
    var data = dados.map(function(dado) {
        return [dado.material, dado.quantidade, dado.preco];
    });

    doc.autoTable({
        head: [['Material', 'Quantidade', 'Preço']],
        body: data
    });

    doc.save("lista_dados.pdf");
}
