let n = document.querySelector('input#anum') // pega o valor de anum que sera o numero que o usuario ira adicionar

let listn = document.querySelector('select#numlist') // pega a lista de numeros que o usuario inseriu representada por numlist

let nres = document.querySelector('div#res') // pega o resultado da analise dos numeros inseridos (res)

let valores = [] // representa o vetor com os indicies que irao conter os numeros para análise.

function isnum(n){ //função isnum recebe o numero que o usuário digitar(n). Faça...

    if(Number(n) >= 1 && Number(n) <= 100){ // Se numero(n) é  maior ou igual a 1 E(&&) numero for menor ou igual a 100, executa ...

        return true // Verdadeiro. Valor é lido.

    } else {

        return false // Falso. Valor não lido.
    }
}

function inlistn(n, l){ // função nlista verifica um numero (n) dentro da lista (l).

    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

// ! = NÃO

function adicionar(){ // função adiciona um numero ao usuario clicar em Adicionar.

    if (isnum(n.value) && !inlistn(n.value, valores)){ // Se o numero lido NÃO(!) estiver na lista (inlistn), (n.value, valores[valores é o vetor]), faça...
       
         valores.push(Number(n.value, valores))// Adiciona(push) o valor inserido pelo usuário(n.value) dentro do vetor[valores].

         let item = document.createElement('option') // Option é um elemento criado para escrever o valor na lista(dentro do vetor).E item é a variavel deste elemento. 

         item.text = `Valor ${n.value} foi inserido.` // item.text faz com que escreva o valor dentro de item{n.value} como uma mensagem. 

         listn.appendChild(item) // esta linha passa item como elemento filho da lista. appendChild(item). Faz com o elemento seja inserido na lista em definitivo e escrevendo a mensagem em definitivo.

         alert('valor inserido')
         
        

    } else {
        //window.alert('Valor inválido.') // Valor inválido. Valor incorreto
        alert('valor repetido ou invalido.')
    }
    n.value = '' // atributo.value = '' faz com que sempre limpre a barra de digitação do usuário após enviar um valor.

    n.focus() // atributo.focus() faz com que o cursor não saia da barra de digitação do usuario. 

     nres.innerHTML = '' // limpa os valores inseridos 
}

function analisar(){
    if (valores.length == 0){ // Verifica se o campo esta vazio antes de analisar

        window.alert('Digite um valor para poder analisar.') // se estiver vazio retornar esse alerta.

    } else { // Executa a análise de valores

        let total = valores.length

        let maior = valores[0] // maior e menor recebem o valor na posição 0, ou seja, o primeiro valor adicionado.
        let menor = valores[0] 

        for(let pos in valores) { // para pos(posição do numero do vetor[valores]) faça...

            if (valores[pos] > maior) // se o valor que esta em pos for maior que a valor da variavel maior.
                maior = valores[pos]
            if (valores[pos] < menor) // se o valor que esta em pos for menor que o valor da variavel menor.
                menor = valores[pos]
        }

        nres.innerHTML = ''  // campo de resultado permanece vazio até a analisar os valores

        nres.innerHTML += `<p>No total, foram cadastrados ${total} números.</p>` // escreve resultado na tela 

        nres.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`  // escreve resultado na tela 

        nres.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>` // escreve resultado na tela 

    }
}




