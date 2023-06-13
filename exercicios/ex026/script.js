/*Variáveis GLOBAIS */
var res = document.getElementById('result')
var computador = 0
var jogador = 0

function sortear() {
    var min = 1
    var max = 100
    var dif = max - min // "dif" como a diferença entre "max" e "min" (neste caso, dif = 99)
    var aleatorio = Math.random() // número decimal aleatório entre 0 e 1 (por exemplo, 0.7324872364983...)
    computador = min + Math.trunc(dif * aleatorio)
    /*começa com a multiplicação da diferença "dif" pelo número decimal "aleatório". Isso produz um número decimal aleatório entre 0 e 99 (por exemplo, 72.34872364983...). Em seguida, a função "Math.trunc()" é usada para arredondar o resultado para o número inteiro mais próximo. o número inteiro resultante é adicionado ao número mínimo "min" para produzir um número inteiro aleatório entre 1 e 100 (por exemplo, 73).*/
}

function jogar() {
    var jogador = Number(window.prompt('Qual é o seu palpite?'))

    if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden' // botão para jogar novamente é ocultado definindo sua propriedade "visibility" como "hidden".
    }
}