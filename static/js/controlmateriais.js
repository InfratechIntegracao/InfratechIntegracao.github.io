function adicionarDado() {
    var material = document.getElementById("material").value;
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;

    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + material + "</td><td>" + quantidade + "</td><td>" + preco + "</td>";

    document.getElementById("data-table").getElementsByTagName('tbody')[0].appendChild(newRow);

    // Limpar os campos de entrada após a adição
    document.getElementById("material").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

// Adiciona evento de clique ao botão "Imprimir PDF"
document.getElementById("btnImprimirPDF").addEventListener("click", function() {
    imprimirPDF();
});

// Função para imprimir PDF
function imprimirPDF() {
    var doc = new jsPDF();
    doc.text("Lista de Dados", 10, 10);
    
    var table = document.getElementById("data-table");
    var data = [];
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var rowData = [];
        var cells = rows[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
            rowData.push(cells[j].innerText);
        }
        data.push(rowData);
    }

    doc.autoTable({
        head: [['Material', 'Quantidade', 'Preço']],
        body: data
    });

    doc.save("lista_dados.pdf");
}