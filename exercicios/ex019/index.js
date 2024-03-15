function calc() {
    let kmPercorrido = Number(document.getElementById('kmPercorrido').value);
    let dias = Number(document.getElementById('dias').value);
    let totalDias = dias * 90;
    let totalKm = kmPercorrido * 0.20; 
    let total = totalDias + totalKm;
    let msg = document.getElementById('msg');

    msg.innerHTML = "<p> Voce ficou com o carro por " + dias + " dias, que resulta em : " + totalDias + " reais, e percorreu " + kmPercorrido + " (Km), que resulta em " + totalKm + " reais </p>";
    msg.innerHTML += "<p> Valor a pagar é : " + total + " reais </p>";  
}