function verificar() {
  let data = new Date(); //pega a data atual
  let ano = data.getFullYear(); //pega o ano atual com 4 digitos (ex:2023)
  let fano = document.getElementById("txtano"); // pego o valor que for colocado no input ano
  let res = document.getElementById("res"); // pego o paragrafo que será substitudo pelas fotos

  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    fano.value.length < 4
  ) {
    //se o valor do ano que o usuario colocou for igual a zero, maior que o ano atual e for menor que 4 digitos aparece a seguinte mensagem.
    window.alert("Verifique os dados");
  } else {
    let fsex = document.getElementsByName("radsex"); //elementos com o mesmo "name", por isso devem ser chamados por getElementsByName se fosse id dava erro
    let idade = ano - Number(fano.value); //calcula o valor que o usuario digitou menos o ano atual
    res.innerHTML = `idade calculada: ${idade} anos`;

    let genero = ""; //variavel genero vazia
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      //se o usuario selecionar (checked) primeira elemento (fsex[0]) aparece o genero masculino
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-homem.png') /*img é a referência ao elemento HTML ao qual você deseja adicionar ou modificar o atributo // src é uma string que representa o nome do atributo que você deseja definir ou modificar //
        bebe-homem.png é uma string que representa o valor que você deseja atribuir ao atributo especificado.*/        
      } else if (idade < 28) {
        img.setAttribute('src', 'homem jovem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem adulto.png')
      } else {
        img.setAttribute('src', 'idoso homem.png')
      }
    } else if (fsex[1].checked) {
      //se o usuario selecionar (checked) segundo elemento (fsex[1]) aparece o genero feminino
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe mulher.png')
      } else if (idade < 28) {
        img.setAttribute('src', 'mulher jovem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher adulta.png')
      } else {
        img.setAttribute('src', 'idosa mulher.png')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
    res.appendChild(img) //(appendChild) adicionar um elemento (nesse caso o img)
  }
}
