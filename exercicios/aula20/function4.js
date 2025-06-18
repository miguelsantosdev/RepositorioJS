// Função para calcular fatorial

function fatorial(n){
    let fat  = 1 
    for (let contador = n; contador > 1; contador--){ // para contador que for maior que 1, contador -1.
        fat *= contador // multiplica fat com o contador até contador for menor que 1.
    }
    return fat
}
console.log(fatorial(8))