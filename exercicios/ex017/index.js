function calcular() {
  let produto = Number(document.getElementById("valor").value);
  let desconto = produto * 0.05;
  let valorPromocional = produto - desconto;
  let msg = document.getElementById("msg");

  msg.innerHTML = "<p> Valor do produto é " + produto + "</p>";
  msg.innerHTML +=
    "<p> Com o desconto de 5% que é: " + desconto + " reais </p>";
  msg.innerHTML += "<p> O total fica : " + valorPromocional + "</p>";
}
