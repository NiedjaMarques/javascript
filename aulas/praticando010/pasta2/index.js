document.getElementById('calcular').addEventListener('click', somar) //Seleciona o botão e adiciona um ouvinte de evento para o clique

function somar() {
    let tn1 = window.document.getElementById('txtn1') //caixa de texto (string)
    let tn2 = window.document.getElementById('txtn2') //caixa de texto (string)
    let res = window.document.getElementById('res')
    let n1 = Number(tn1.value) // estou transformando o valor (string) que o usuario coloca em um number
    let n2 = Number(tn2.value) // estou transformando o valor (string) que o usuario coloca em um number
    let soma = n1 + n2    

    res.innerHTML = `A soma entre ${n1} e ${n2} é <strong>${soma}</strong>`

}