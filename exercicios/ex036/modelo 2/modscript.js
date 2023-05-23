function verificar(){
    let data = new Date() //pega a data atual
    let ano = data.getFullYear() //pega o ano atual com 4 digitos (ex:2023)
    let fano = document.getElementById('txtano') // pego o valor que for colocado no input ano
    let res = document.getElementById('res') // pego o paragrafo que será substitudo pelas fotos

    if(fano.value.length == 0 || Number(fano.value) > ano || fano.value.length < 4){ //se o valor do ano que o usuario colocou for igual a zero, maior que o ano atual e for menor que 4 digitos aparece a seguinte mensagem.
        window.alert('Verifique os dados')
    }else {
        let fsex = document.getElementsByName('radsex') //elementos com o mesmo "name", por isso devem ser chamados por getElementsByName se fosse id dava erro
        let idade = ano - Number(fano.value) //calcula o valor que o usuario digitou menos o ano atual
        res.innerHTML = `idade calculada: ${idade} anos`

        let genero = '' //genero vazia
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) { //se o usuario selecionar (checked) primeira elemento (fsex[0]) aparece o genero masculino
            genero = 'Homem'         
        }else if(fsex[1].checked) { //se o usuario selecionar (checked) segundo elemento (fsex[1]) aparece o genero feminino
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}