let agora = new Date()
 let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 5 && hora < 12){
    console.log(`bom dia!`)
}else if(hora >= 12 && hora < 18){
    console.log(`boa tarde!`) 
}else if(hora >= 18 && hora < 23){
    console.log(`boa noite!`)
}else{
    console.log(`boa madrugada!`)
}