function clicou() {
    var nome = window.prompt('Qual é o seu nome?')
    var n1 =  Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 =  Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var soma = (n1+n2)/2    
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${(soma)}</mark></p>`
    
    if (soma >= 7) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style=color:red;>Meus parabéns!</strong></p>`
    }else{
        res.innerHTML += `<p>A mensagem que temos é: <strong style=color:red;>Estude um pouco mais!</strong></p>`
    }
}