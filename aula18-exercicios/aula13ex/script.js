alert('Opa')

function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/fotobomdia.png'
        document.body.style.background = "rgba(80, 206, 248, 0.788)"
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/fotoboatarde.png'
        document.body.style.background = "rgba(245, 73, 5, 0.74)"
    } else {
        imagem.src = 'imagens/fotoboanoite.png'
        document.body.style.background = "rgb(4, 12, 124)"
    }
}
