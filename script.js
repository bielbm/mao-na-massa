var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricional"

var paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = document.querySelector('.info-peso').textContent;
var alturaPaulo = document.querySelector('.info-altura').textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
paulo.querySelector(".info-imc").textContent= imcPaulo;