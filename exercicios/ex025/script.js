function clique() {
    var res = document.getElementById('res')
    var calc = (Math.floor(Math.random() * 100)); /*será imprimido no console um número inteiro aleatorio de 0 a 100*/
    res.innerHTML += `<p>Acabei de pensar no número <mark>${calc}</mark></p>`
}

function limpar() {
    res.innerHTML = null
}