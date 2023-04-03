function clicou() {
    let nasci = Number(prompt('Em que ano você nasceu?'))
    let resu = document.getElementById('res')
    let agora = new Date()
    let ano = agora.getFullYear()
    let calc = ano - nasci 

    resu.innerHTML = `<p>Quem nasceu em <strong>${nasci}</strong> vai completar <strong>${calc}</strong> anos em <strong>${ano}</strong>.</p>`
    
}