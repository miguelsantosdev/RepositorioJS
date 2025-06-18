// função para verificar se o número é par ou ímpar

function parimp(n){ // Parâmetro
    if(n%2==0){ // Ação
        return 'par' // Retorno
    } else {
        return 'impar' // Retorno
    }
}
let res = parimp(8) // esta linha faz uma chamada ao parametro parimp, onde o n recebe o valor 10.
console.log(`O resultado é ${res}.`) 