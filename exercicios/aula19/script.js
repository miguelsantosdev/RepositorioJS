// Criando um Vetor //

let num = [8,6,4,2,0] // vetor com indice de 0 a 5. 
let pos = num.indexOf(8) // indexOf procura a posição do elemento existente. Se o elemento nao existir ele retorna -1

num.sort() // num.sort tem que vir antes de qualquer push, para poder ordenar os elementos corretamente.
num.push(12)
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // mostra o comprimento do array
console.log(num[5]) // mostra o valor do elemento na posição dentro do colchetes do vetor.

if (pos == -1){
    console.log('O elemento não foi encontrado.')
} else {
    console.log(`o elemento está na posição: ${pos}. `)
}

/*num[6] = 12 // Comando faz com que o JS crie a posição 6 e armazena o valor 12.

num.push(14) // num.push faz com que o JS crie mais um indice e armazena o valor 14. O vetor ganha mais uma posição

num.length // Mostra o comprimento do array.

num.sort() // Coloca todos os elementos em ordem crescente.

*/

