var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricional";

// Função para calcular o IMC
function calcularIMC(paciente) {
    var peso = parseFloat(paciente.querySelector('.info-peso').textContent);
    var altura = parseFloat(paciente.querySelector('.info-altura').textContent);
    var imc = peso / (altura * altura);
    paciente.querySelector('.info-imc').textContent = imc.toFixed(2); // Exibir IMC com 2 casas decimais
}

// Seleciona cada paciente
var pacientes = document.querySelectorAll('tbody tr');

pacientes.forEach(function(paciente) {
    calcularIMC(paciente);
});