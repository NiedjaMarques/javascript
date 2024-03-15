function calc() {
    let diasTrabalhados = Number(document.getElementById('diasTrabalhados').value);
    let salario = diasTrabalhados * 8 * 25   
    let plural = (diasTrabalhados === 1) ? "dia" : "dias";

    msg.innerHTML = "<p> Voce trabalhou " + diasTrabalhados + " " + plural + ", seu salário este mês é de : " + salario.toFixed(2) + "</p>";
}