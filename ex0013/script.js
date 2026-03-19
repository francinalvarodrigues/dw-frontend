function gerarTabuada() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    // Validar se o campo está vazio
    if (numero === "") {
        resultado.innerHTML = "<p style='color: red;'>⚠️ Digite um número!</p>";
        return;
    }

    // Converter para número inteiro
    numero = parseInt(numero);

    // Limpar resultados anteriores
    resultado.innerHTML = "";

    // Gerar a tabuada
    for (let i = 1; i <= 10; i++) {
        const operacao = numero + " × " + i + " = " + (numero * i);
        resultado.innerHTML += "<div class='resultado-item'>" + operacao + "</div>";
    }
}

// Permitir gerar tabuada ao pressionar Enter
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        gerarTabuada();
    }
});
