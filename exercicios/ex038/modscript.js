function calcular(){
    let num = document.getElementById('txtnum'); // let que pega o valor que o usuario colocar na caixa. 
    let resultado = document.getElementById('result') // let que chama div select no html 

    if (num.value.length == 0){ // verificação do valor que o usuario colocou
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //converção do valor colocado na caixa de texto de string para numero
        resultado.innerHTML = '' //Estamos limpando o conteúdo da div com o ID "result".
        for(let cont = 1; cont <= 10; cont++){ // loop for
            let item = document.createElement('option') // a cada interação do loop, cria-se um elemento option
            item.text = `${n} x ${cont} = ${n*cont}` // minha option será o resultado da operação
            item.value = `resultado ${cont}` //importante para php
            resultado.appendChild(item) // Juntei o elemento option à variavel resultado, usando resultado.appendChild(item), para que a tabuada calculada seja exibida na página dentro do select.
        }
    }    
}