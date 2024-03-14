function calcularMedia(){
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media = (n1+n2)/2
    let resultado = document.getElementById('result')    

    resultado.innerHTML += `Calculando a média final de ${nome}.<br>`
    resultado.innerHTML += `As notas obtidas foram ${n1} e ${n2}.<br>`
    resultado.innerHTML += `A média final será ${media}.<br>`
    
    if(media >= 7 ) {
        resultado.innerHTML += `A mensagem que temos é: <strong>PARABÉNS VOCÊ FOI APROVADO!</strong><br>`
    } else {
        resultado.innerHTML += `A mensagem que temos é: <strong>REPROVADO, ESTUDE UM POUCO MAIS!</strong><br>`
    }

}