function calcular(){
    let num = Number(document.getElementById('txtnum').value); // let que pega o valor que o usuario colocar na caixa. 
    let resultado = document.getElementById('result') // let que chama uma div no html // serve para mostrar a tabuada quando for executado
    let tabuada = ''; // let tabuada vazia 

    if (num == 0){
        window.alert('Por favor, digite um número!')
    } else{
        for(let cont = 1; cont <= 10; cont++){
            tabuada += `${num} x ${cont} = ${num*cont} <br/>` //Operação um valor * o outro
        }
    }    
    resultado.innerHTML = tabuada; //tabuada é a operação
}