function clicou(){
    let ano = Number(window.prompt(`Em que ano você nasceu?`)); // caixa de pergunta para o usuario sobre o ano    
    let agora = new Date();// pega o tempo atual do sistema
    let anoatual = agora.getFullYear(); // pega o ano atual do sistema    
    let calc = (anoatual-ano); // calcula o ano que o usuario colocou menos o ano atual do sistema
    let result = document.getElementById('resultado'); //chama meu elemento html

    
    result.innerHTML = `Quem nasceu em <strong>${ano}</strong> vai completar <strong>${calc}</strong> anos em 2023`
    
}