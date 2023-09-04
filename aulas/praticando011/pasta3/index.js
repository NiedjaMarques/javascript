function calcular(){
    let vel = document.getElementById('txtmulta') //chamando o meu elemento DOM no html
    let velocidade = Number(vel.value) //pegar o valor que o usuario colocar no meu input (Tratamento de dados, de string pra number)
    let res = document.getElementById('res') //chamando meu elemento DOM no html
    res.innerHTML = `<p>A Velociodade é de <strong>${velocidade}</strong>Km/h</p>`

    if(velocidade > 60.5){
        res.innerHTML += `<p>Você foi MULTADO por excesso de velocidade</p>`
    } else {
        res.innerHTML += `<p>Dirija sempre com cuidado!</p>`
    }
}