function clicou() {
    var mes= prompt('Digite o mês em extenso (ex: Setembro)') //usuario bota o mês
    var resultado = document.getElementById('resultado') //paragrafo de substituição
    let estaçao  //

    switch (mes.toUpperCase()) { //O método toUpperCase() transforma todas as letras de uma string para maiúsculas

        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
        estaçao = 'INVERNO'
        break

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estaçao = 'PRIMAVERA'
            break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estaçao = 'VERÃO'
            break

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estaçao = 'OUTONO'
            break

        default:
            estaçao = 'INDEFINIDA'
            break        
    }

    resultado.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estaçao}</strong></mark>.</p>`
}