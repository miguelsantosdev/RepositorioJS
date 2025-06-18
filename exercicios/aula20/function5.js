// Recursividade

function fatorial(n){
    if(n==1){ 
        return 1 // retorna fatorial de 1
    } else{
        return n * fatorial(n-1) // retorna o valor de n * fatorial dele mesmo (n-1).
    }
}
console.log(fatorial(3))

