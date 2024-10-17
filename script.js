var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricional"

var paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = document.querySelector('.info-peso').textContent;
var alturaPaulo = document.querySelector('.info-altura').textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
paulo.querySelector(".info-imc").textContent= imcPaulo;

var joão = document.querySelector('#linhajoao');
var pesojoão = document.querySelector('.info-peso').textContent;
var alturajoão = document.querySelector('.info-altura').textContent;
var imcjoão = pesojoão / (alturajoão * alturajoão);
joão.querySelector(".info-imc").textContent= imcjoão;

var  erica = document.querySelector('#linhaerica');
var pesoerica = document.querySelector('.info-peso').textContent;
var alturaerica = document.querySelector('.info-altura').textContent;
var imcerica = pesoerica / (alturaerica * alturaerica);
erica.querySelector(".info-imc").textContent= imcerica;

var douglas = document.querySelector('#linhadouglas');
var pesodouglas = document.querySelector('.info-peso').textContent;
var alturadouglas = document.querySelector('.info-altura').textContent;
var imcdouglas = pesodouglas / (alturadouglas * alturadouglas);
douglas.querySelector(".info-imc").textContent= imcdouglas;

var tatiana = document.querySelector('#linhatatiana');
var pesotatiana = document.querySelector('.info-peso').textContent;
var alturatatiana = document.querySelector('.info-altura').textContent;
var imctatiana = pesotatiana/ (alturatatiana * alturatatiana);
tatiana.querySelector(".info-imc").textContent= imctatiana;