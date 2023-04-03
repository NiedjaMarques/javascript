function clicar() {
    let n1 = Number(prompt('Primeiro valor:')) 
    let n2 = Number(prompt('Segundo valor:')) 
    let resultado = Number(prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer ?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
    let msgcalculando = document.getElementById('msgcalculando')  
    msgcalculando.innerHTML = `<p style="color:green";><strong>Calculando...</strong></p>`
    
    if (resultado === 1) {
        resultado = n1 + n2
        msgcalculando.innerHTML += `<p>${n1} + ${n2} = <strong>${resultado}</strong></p>`
    }else if (resultado === 2){
        resultado = n1 - n2
        msgcalculando.innerHTML += `<p>${n1} - ${n2} = <strong>${resultado}</strong></p>`
    }else if (resultado === 3){
        resultado = n1 * n2
        msgcalculando.innerHTML += `<p>${n1} x ${n2} = <strong>${resultado}</strong></p>`
    }else if (resultado === 4){
        resultado = n1 / n2
        msgcalculando.innerHTML += `<p>${n1} / ${n2} = <strong>${resultado}</strong></p>`
    }else{
        msgcalculando.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou <strong>${n1}</strong> e <strong>${n2}</strong>, mas não sei o que fazer com eles.</p>`
    }
}