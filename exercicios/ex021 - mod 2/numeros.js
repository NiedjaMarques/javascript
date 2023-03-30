function cliquei() {
    var num1 = Number(prompt('Digite um número:'))
    var num2 = Number(prompt('Digite outro número:'))

    var res = document.getElementById('res')

    if (num1 > num2) {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num1}</strong></p>`
    }else if (num2 > num1) {
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong></p>`
    }else{
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
}