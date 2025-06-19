let n = document.querySelector('input#anum')
let listn = document.querySelector('select#numlist')
let nres = document.querySelector('div#res')
let valores = []

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlistn(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (isnum(n.value) && !inlistn(n.value, valores)){
        window.alert('Valor inserido.')
    } else {
        window.alert('Valor inválido.')
    } 
}





/*function analise(n){

} */