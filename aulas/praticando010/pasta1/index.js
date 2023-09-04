let a = window.document.getElementById('area')
a.addEventListener('click', clicou)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


function clicou(){
    a.innerHTML = 'Clicou!'
    a.style.background = 'red'
}

function entrar(){
    a.innerHTML = 'Entrou!'
}

function sair(){
    a.innerHTML = 'Saiu!'
    a.style.background = 'green'
}