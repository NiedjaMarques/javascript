 function fatorial(n){
    let fat = 1 // variavel fat recebe valor 1
    for (let c = n; c > 1; c--){ // variavel c recebe 5; enquanto 5 for maior que 1; 5 perde menos 1
        fat *= c // varriavel de valor 1 *(vezes) 5 
    }
    return fat //retorna fat 
}
console.log(fatorial(5)) // chamada para saber valor fatorial de 5

// 5! = 5 x 4 x 3 x 2 x 1 = 120

