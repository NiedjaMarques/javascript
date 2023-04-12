function clique() {
    let text = document.getElementById('resultado')
    text.innerHTML += `<p><strong>Contagem Regressiva de 10 a 1</strong></p>`

    for (let cont = 10; cont >= 0 ; cont--){
        text.innerHTML += `&nbsp;👉&nbsp;${cont}`
    }
    text.innerHTML += `&nbsp;🏁&nbsp;`
}
