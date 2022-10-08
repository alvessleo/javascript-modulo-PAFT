//1. Crie uma função chamada mais, que aceite 2 parâmetros e os some. Utilize as 3 sintaxes possíveis.

// Primeira sintaxe
function maisSintaxe1(x, y){
    return x + y
}   
console.log(maisSintaxe1(1,2));


// Segunda sintaxe
const maisSintaxe2 = (x, y) => a + b;
console.log(maisSintaxe2(1,2));


// Terceira Sintaxe
const maisSintaxe3 = (x, y) => {
    return x + y;
}
console.log(maisSintaxe3(1,2));