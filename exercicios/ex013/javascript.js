function clicou(){
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número:`))
    let msg = document.getElementById(`result`)   

    if(n1 === n2){
        msg.innerHTML = `Analisando os valores ${n1} e ${n2}, ambos são IGUAIS`
    }else{
        if(n1 > n2){
            msg.innerHTML = `Analisando os valores ${n1} e ${n2}, o valor maior é ${n1}<br>`
        }else{
            msg.innerHTML = `Analisando os valores ${n1} e ${n2}, o valor maior é ${n2}<br>`
        }

    }

}