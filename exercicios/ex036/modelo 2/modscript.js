function carregar(){
    var msg = window.document.getElementById('msg') //chamando um id no meu HTML
    var img = window.document.getElementById('imagem') 
    var data = new Date() //chamo a data atual do sistema
    var hora = data.getHours() // chamo a hora atual do sistema
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) { //maior que meia noite e menor que meio dia = bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) { //maior que meio dia e menor que 18 horas = boa tarde
        img.src = 'tarde.png' // puxa a imagem que estiver na minha pasta
        document.body.style.background = '#b9846f' //muda a cor de fundo do site
    } else { //opção restante = maior que 18 horas e menor que meia noite = boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

