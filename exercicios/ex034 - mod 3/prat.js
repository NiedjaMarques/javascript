function iniciarContagem(){
    let result = document.getElementById('resultado');
    let limite = document.getElementById('inum').value;
    result.innerHTML += `<p><strong>Contando de 0 até (numero)</strong></p>`
    document.getElementById('inum').value = "";

    let num = 0
    while(num <= limite) {
        result.innerHTML += `&nbsp;👉&nbsp; ${num}`;
        num++
    }
    result.innerHTML += `&nbsp;🏁&nbsp;`;
}

