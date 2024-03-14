let frase = document.getElementById('result')// chamando meu documento HTML pelo Dom
frase.innerHTML = `Aqui vou registrar suas ações com os botões acima.<br>`

function açao1(){
    frase.innerHTML += 'Clicou no primeiro botão <br>'

}

function açao2(){
    frase.innerHTML += 'Clicou no segundo botão <br>'

}

function açao3(){
    frase.innerHTML += 'Clicou no terceiro botão <br>'

}

function açao4(){
    frase.innerHTML += 'Clicou no quarto botão <br>'

}

