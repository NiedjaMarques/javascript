let n1 = Number(window.prompt('Qual a primeira nota?'))
let n2 = Number(window.prompt('Qual a segunda nota?'))
let media = (n1 + n2) / 2 


if (media >= 7){
    window.alert(`Sua média é ${media.toFixed(1)} - ALUNO APROVADO`)
} else {
    window.alert(`Sua média é ${media.toFixed(1)} - ALUNO REPROVADO`)
}
