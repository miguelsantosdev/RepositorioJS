/*var contador = 0

/*do {
    console.log(`${contador}`)
    contador++
} while (contador <= 6) */

      /*  for(inicio; teste; incremento)  /*     
/*for (contador = 0; contador  <= 20; contador++){
    console.log(` -> ${contador}`)
}   */

window.alert('Seja bem vindo ao CONTADOR !')
window.confirm('Faça uma contagem de 1 até 20.')
window.prompt('Digite o seu número da sorte para prosseguir. Caso não tenha, escolha um.')


function contagem() {

    /*declarar variaveis pelo id, armazenando os valores inseridos pelo usuário. */

    const inicio = Number(document.getElementById('iini').value);
    const fim = Number(document.getElementById('ifim').value);
    const passo = Number(document.getElementById('ipass').value);

    const res = document.createElement("p")

    res.innerHTML = ""; // res = resultado da contagem.

    // Validação dos dados inseridos pelo Usuário

    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        alert("Preencha todos os campos corretamente.");
        return;
    }

    // Lógica 

    /*if(inicio < 0 || inicio > 10 || fim < 10 || fim > 20 || passo < 1 || passo > 3) {
        // não permite que o usuario digite um valor fora dos limites.
        alert("Os valores não estão de acordo com as regras. Digite novamente !"); // retorna desde o inicio e gera um alerta.
        return;
    } */
  
    res.innerHTML += "Contagem:";
    
    if (inicio < fim) { // contagem progressiva
        for(contador = inicio; contador <= fim; contador += passo ){
            res.innerHTML += `-> ${contador} \u{1F648}` // U+1F648 = codigo do emoji, \u serve para ler o emoji
        }
    } else { // contagem regressiva
        for(contador = inicio; contador >=fim; contador -= passo){
            res.innerHTML += `-> ${contador} \u{1F64A}`
        }
    }
     
    // Mostra resultado na tela.
    document.querySelector("main").appendChild(res);
} 