function contar(){
    let inicio = document.getElementById('txtinicio') //chamando meu input inicio
    let fim = document.getElementById('txtfim') //chamando meu input fim
    let passo = document.getElementById('txtpasso') //chamando meu input passo
    let frase = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //se o valor colocado no -inicio- não estiver preenchido, aparece mensagem de erro.
        frase.innerHTML = 'Impossivel contar!'
    } else {
        frase.innerHTML = `Contando: <br>`
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p){ 
            frase.innerHTML += ` ${c} \u{1F449} `
        }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p){
                frase.innerHTML += ` ${c} \u{1F449} `
            }
        }            
        frase.innerHTML += `\u{1F3C1}`
    }
}