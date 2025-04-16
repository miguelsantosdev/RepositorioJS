var horabrasil = new Date()
var hora = horabrasil.getHours
console.log(`Agora são exatamente: ${horabrasil}.`)
if (hora > 5 && hora <= 12){
    console.log('Bom dia!')
} else if(hora > 12 && hora <= 18){
    console.log('Boa tarde!')
} else if (hora > 18 && hora <=23 ){
    console.log('Boa noite!')
} else {
    console.log('Vai dormir!')
}


