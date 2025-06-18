// Criando um vetor usando um laço de repetição

let valor = [20, 18, 16, 14, 12, 10]
let pos = 0 // pos representa a posição dentro do vetor.

for(pos in valor){ // para cada pos em valor faça...
    console.log(`A posição ${pos} tem o valor ${valor[pos]}.`) // mostra a posição {pos} e valor do elemento {valor[pos]}
}



/*
for(pos = 0; pos < valor.length; pos++){ // pos recebe 0, enquanto pos for menor que comprimento do vetor, pos recebe +1.

    console.log(`A POSIÇÃO ${pos} tem o valor ${valor[pos]}`) // mostra a posição {pos} e o elemento da posição o vetor {valor[pos]}
}


// console.log(valor) -> Mostra vetor

*/