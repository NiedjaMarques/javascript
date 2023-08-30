let valor = Number(window.prompt('Qual o valor do empréstimo?'))
let parcelas = Number(window.prompt(`Quantas parcelas?`))
let taxaDeJuros = 0.20;
let juros = valor*taxaDeJuros;
let total = (valor + juros)/parcelas

window.alert(`Vou pagar ${parcelas} parcelas de ${total.toFixed(2)} reais`) //garante que o valor exibido na mensagem tenha duas casas decimais