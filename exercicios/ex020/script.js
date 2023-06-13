function clicou() {
    var num = Number(window.prompt('Digite um número:'))
    var res = window.document.getElementById('res')

    if (num % 2 === 0) {
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong> </p>`
    }else{
        res.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong> </p>`
    }    
}