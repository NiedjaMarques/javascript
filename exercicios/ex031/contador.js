function contando() {
    let msg = document.getElementById('resultado') //Ligação com meu paragrafo no HTML
    msg.innerHTML += `<p>Contando de 1 até 10, marcando os pares</p>`

    let num = 1
    while (num <= 10) {

        if (num % 2 === 0){
            msg.innerHTML += `&nbsp;👉&nbsp;<mark>${num}</mark>`
        } else {
            msg.innerHTML += `&nbsp;👉&nbsp;${num}`
        }        
        num++
    }
    msg.innerHTML += `🏁`
    
}