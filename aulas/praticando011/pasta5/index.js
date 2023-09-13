function calcular(){
    let vel = document.getElementById('vel') //chamando meu elemento do input
    let velocidade = Number(vel.value) //pego a velocidade que o usuario colocar na caixa de input // tratando os dados
    let msg = document.getElementById('result') // chamando meu paragrafo

    msg.innerHTML = `<p>Sua velocidade atual é de <strong>${velocidade}Km/h</strong></p>`
    msg.innerHTML = `<p>Dirija sempre com cinto de segurança!</p>`

    if(velocidade >= 60){
        msg.innerHTML += `<strong>MULTADO!</strong>`
    }else{
        msg.innerHTML = `Dirija com cuidado!`
    }
}