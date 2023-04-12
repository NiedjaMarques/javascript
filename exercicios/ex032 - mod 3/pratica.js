function contagem() {
    let texto = document.querySelector('p.resultado')
    texto.innerHTML += `<p><strong>Números pares de 1 até 10</strong></p>`


    let num = 1
    do {    
        if (num % 2 === 0) {
            texto.innerHTML += `&nbsp👉&nbsp${num}`
        }        
        num++
    }while (num <= 10)

    texto.innerHTML += `&nbsp🏁&nbsp`
}