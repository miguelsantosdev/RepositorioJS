function verificar(){
    var data = new Date()
    var nasc = data.getFullYear()
    var ano = document.getElementById('anonasc')
    var final = document.getElementById('final')

    if (ano.value == 0 || ano.value > nasc){
        window.alert('Erro nos dados inseridos. Provavelmente voce esqueceu quando voce nasceu !')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = nasc - Number(ano.value)
        final.innerHTML = `Sua idade é de: ${idade} anos.`
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // gerar uma arquivo de iomagem na section de acordo com a idade
        if (sex[0].checked) { // [0].checked verifica se a opcão homem foi marcada, caso contrario leia a opção mulher.
            gen = 'Homem'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/garoto catarrento.png') // carregar a imagem de acordo com a idade
            }
            else if (idade >= 14 && idade < 30) {
                img.setAttribute('src', 'imagens/homem-homem.png') // carregar a imagem de acordo com a idade
            }
                
            else if (idade >= 30 && idade < 60){
                img.setAttribute('src', 'imagens/homem-homem 2.0.png')// carregar a imagem de acordo com a idade
            }
                
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/menina-catarrenta.png')// carregar a imagem de acordo com a idade
            }
            else if (idade >= 14 && idade < 30) {
                img.setAttribute('src', 'imagens/mulher-nova .png')// carregar a imagem de acordo com a idade
                
            }
                
            else if (idade >= 30 && idade < 60){
                img.setAttribute('src', 'imagens/mulher adulta.png')  // carregar a imagem de acordo com a idade
            }
                
        }
        final.innerHTML = `Você é um(a) ${gen} com ${idade} anos.` // escrever a idade e ano na ultima div
        final.appendChild(img) //adicionar elemento img(imagens)
    }

}