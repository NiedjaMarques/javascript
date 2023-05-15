function iniciarContagem(){
    let result = document.getElementById('resultado');   
    let limite = document.getElementById('inum').value; 
    result.innerHTML += `<p><strong>Contando de 0 até ${limite}</strong></p>`
    document.getElementById('inum').value = "";

    let num = 0
    while(num <= limite) {
        result.innerHTML += `&nbsp;👉&nbsp; ${num}`;
        num++
    }
    result.innerHTML += `&nbsp;🏁&nbsp;`;
    
}

/*let popup = document.getElementById('popup-id');
let input = document.getElementById('inum');

input.addEventListener('change', function (event){

If (validation(event) != true){
Popup.style.display = 'block';
}

});
Function validation(event){
    // Aqui estará sua lógica de validação 
}*/


