let peso = Number(window.prompt('Quanto voce pesa?')) 
let altura = Number(window.prompt('Qual é a sua altura?'))
let imc = peso/(altura**2)

if (imc < 17){
    window.alert(`Seu IMC é ${imc.toFixed(2)}, muito abaixo do peso!`)
} else if(imc >= 17 && imc < 18.5){
    window.alert(`Seu IMC é ${imc.toFixed(2)}, abaixo do peso!`)
} else if(imc >= 18.5 && imc < 25){
    window.alert(`Seu IMC é ${imc.toFixed(2)}, peso ideal!`)
} else if(imc >= 25 && imc < 30) {
    window.alert(`Seu IMC é ${imc.toFixed(2)}, sobrepeso!`)
} else if(imc >= 30 && imc < 35) {
    window.alert(`Seu IMC é ${imc.toFixed(2)}, obesidade!`)
} else if(imc >= 35 && imc < 40) {
    window.alert(`Seu IMC é ${imc.toFixed(2)}, obesidade severa!`)
} else if(imc > 40 ) {
    window.alert(`Seu IMC é ${imc.toFixed(2)}, obesidade mórbida!`)
}