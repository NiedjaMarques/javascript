function clicou(){
   let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; // Guarda varios valores - ARRAY
   let dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']; // Guarda varios valores - ARRAY
   let agora = new Date(); // pega dados atuais do sistema

   let msg = document.getElementById('result');// var chamando meu id no html  

   let dia = agora.getDate(); // retorna o dia atual do sistema
   let mesAtual = agora.getMonth(); // retorna o mes atual do sitema
   let ano = agora.getFullYear(); // retorna ano atual do sistema
   let diassemana = agora.getDay(); // retorna o dia da semana
   let hora = agora.getHours(); //retorna a hora tual do sistema 
   let minutos = agora.getMinutes(); // retorna o minuto atual do sistema
   let segundos = agora.getSeconds(); // retorna o segundo atual do sistema

   let mes = meses[mesAtual]; //acessa o elemento no array "meses" que corresponde ao indice "mesAtual" 
   let semana = dias[diassemana]  

    msg.innerHTML = `Dia: <mark>${dia}</mark><br>`
    msg.innerHTML += `Mês: <mark>${mes}</mark><br>`
    msg.innerHTML += `Ano: <mark>${ano}</mark><br>`
    msg.innerHTML += `Dia da Semana: <mark>${semana}</mark><br>`
    msg.innerHTML += `Hora: <mark>${hora}</mark><br>`
    msg.innerHTML += `Minutos: <mark>${minutos}</mark><br>`
    msg.innerHTML += `Segundos: <mark>${segundos}</mark><br>`
}