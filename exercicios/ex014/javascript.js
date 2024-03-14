function clicou(){
    let agora = new Date // objeto que me dá data e hora de acordo com o sistema
    let msg = document.getElementById('result')

    msg.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`

}