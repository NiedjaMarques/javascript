let clicou = () => {
    let pais = document.getElementById('txtpais');
    let res = document.getElementById('res')

    res.innerHTML = `<p>Seu país é ${pais.value}</p>`

    if (pais.value === 'Brasil'){
        res.innerHTML += `<p>Voce é Brasileiro(a)</p>`

    }else{
        res.innerHTML += `<p>Você é ESTRANGEIRO</p>`
    }


} 