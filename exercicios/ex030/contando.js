function contar(){
    var frase = document.getElementById(`result`)
    frase.innerHTML += `<h2>Contando de 1 até 10</h2>` 
    
    let contando = 1
    while (contando <= 10){
        frase.innerHTML += `${contando}&nbsp;👉&nbsp;`
        contando++
    }
    frase.innerHTML += `🏁`
}