window.alert('Seja bem vindo a  T A B U A D A ')
window.confirm('Esclha um número de 0 a 10 e veja sua Tabuada')

const num1 = Number(document.getElementById('num').value);
const resultado = document.createElement("p")

resultado.innerHTML = "";

var mult0 = 0;
var mult1 = 1;
var mult2 = 2;
var mult3 = 3;
var mult4 = 4;
var mult5 = 5;
var mult6 = 6;
var mult7 = 7;
var mult8 = 8;
var mult9 = 9;
var mult10 = 10;

// validação dos dados
function calcular()
    if(isNaN(num1)) {
        alert("Preencha o campo com um número de 0 a 10.");
        return;
    }

    // Lógica 

    if(num1 < 0 || num > 10){
        alert("O numero nao pode ser menor que 0 e maior que 10. Digite novamente. ")
        return;
    }

    resultado.innerHTML += "Tabuada";

