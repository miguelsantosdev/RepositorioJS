window.alert('Seja bem vindo a  T A B U A D A ')
window.confirm('Escolha um número de 0 a 10 e veja sua Tabuada')

// Conexão HTML e JavaScript
function calcular() {
    let numero = document.getElementById('num');  // numero recebe o numero que o usuario escolher (num)
    let vertabuada = document.getElementById('tabnum') 

// Lógica
    if (numero.value.lenght == 0){ // se numero tiver for igual a zero exibe alerta.
            alert('Por favor, digite um número. ')    
        } else {
            let n = Number(numero.value) // le o valor numero e guarda na let n
            let contador = 1 // contador refere a contagem de vezes que ira multiplicar o numero.
            tabnum.innerHTML = '' // deixa o resultado da tabuada em branco ao retornar a contagem.
            while (contador <= 10){ // laço de repetição de 1 a 10

                let item = document.createElement('option') // cria lista de numeros da tabuada de 1 a 10.
                item.text = `${n} x ${contador} = ${n*contador}`
                vertabuada.appendChild(item) // cria um elemento filho para que a tabuada (item) seja exibida.

                contador++ // continuar a contagem até o final.
            }          
        }
}
