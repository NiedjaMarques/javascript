function teste(){
    let num1 = Number(window.prompt(`Digite um número:`))
    let msg = document.getElementById(`result`)

    if(num1 % 2 === 0){
        msg.innerHTML = `O número ${num1} que foi digitado é <strong>PAR!</strong><br>`
    }else{
        msg.innerHTML = `O número ${num1} que foi digitado é <strong>ÍMPAR!</strong><br>`
    }

}