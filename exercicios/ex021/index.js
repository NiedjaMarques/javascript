function calc() {
    let cigarrosDia = Number(document.getElementById('cigarros').value);
    let anosF = Number(document.getElementById('anos').value);
    let totalCigarros = cigarrosDia * anosF * 365;
    let totalMinutosPerdidos = totalCigarros * 10;
    let diasPerdidos = totalMinutosPerdidos / (24 * 60);

    msg.innerHTML = "<p> Um fumante que fuma " + cigarrosDia + " cigarros por dia e já fumou por  " + anosF + " ano(s) perderá aproximadamente " + diasPerdidos.toFixed(2) + " dias de vida </p>";
}