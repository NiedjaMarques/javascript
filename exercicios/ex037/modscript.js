function contar(){
    let frase = document.getElementById('substitui')
    frase.innerHTML = `Contando:`

    let contando = 1
    while (contando <= 10){
        frase.innerHTML += `${contando}&nbsp;👉&nbsp;`
        contando++
    }
    frase.innerHTML += `🏁`
}