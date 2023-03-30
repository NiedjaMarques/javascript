function botao() {
    let agora = new Date()
    let dia = agora.getDate()
    let mes = agora.getMonth() + 1; // Adiciona 1 ao mês porque o valor retornado começa em 0 para janeiro   
    let ano = agora.getFullYear();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();
    let fusoHorario = agora.getTimezoneOffset() / 60; //dividimos por 60 para obter a diferença em horas.

    let res = window.document.getElementById('res')

    res.innerHTML = `O que eu recebi do sistema foi <mark>${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo} GMT ${(fusoHorario < 0 ? "+" : "-")}  ${Math.abs(fusoHorario)};</mark>`   

    /*
        0 = Janeiro
        1 = Fevereiro
        2 = Março
        3 = Abril
        4 = Maio
        5 = Junho
        6 = Julho
        7 = Agosto
        8 = Setembro 
        9 = Outubro
        10 = Novembro
        11 = Dezembro
    */
}