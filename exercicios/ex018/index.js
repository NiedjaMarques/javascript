function calc() {
    let salario = Number(document.getElementById('salario').value);
    let aumento = (salario * 0.15) + salario
    let msg = document.getElementById('msg');

    msg.innerHTML = "<p> Seu salário é: " + salario + "</p>";
    msg.innerHTML += "<p> Com o aumento de 15% fica: " + aumento + " reais </p>";

    if (salario >= 3000 ) {
        msg.innerHTML += "<p> AAAEEE TA GANHANDO BEM PORRA</p>";
    } else {
        msg.innerHTML += "<p> AMADA? PEÇA UM AUMENTO JA!</p>";        
    }    
}