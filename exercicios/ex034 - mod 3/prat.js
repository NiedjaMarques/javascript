function iniciarContagem(){
    let result = document.getElementById('resultado');   
    let limite = document.getElementById('inum').value;
    let num = 0
    if (limite > 0 && (limite % 1 === 0)){
        result.innerHTML += `<p><strong>Contando de 0 até ${limite}</strong></p>`
        while(num <= limite) {
            result.innerHTML += `&nbsp;👉&nbsp; ${num}`;
            num++
        }
        result.innerHTML += `&nbsp;🏁&nbsp;`;
    }
}