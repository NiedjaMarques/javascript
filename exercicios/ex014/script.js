function clicar(){
    var nome = window.prompt('Qual é o nome do aluno ?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var media = (n1+n2)/2

    var msg = '';// cria uma variável e deixa ela vazia
    if (media >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns!';
    } else { // senão...
        msg = 'Estude um pouco mais!';
    }

    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico. */

    var resu = window.document.getElementById('resul')
    resu.innerHTML = `<p>Calculando a média de <mark>${nome}</mark>.</p>`
    resu.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    resu.innerHTML += `<p>A média final será <mark>${(n1+n2)/2}</mark></p>`
    resu.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`    
}