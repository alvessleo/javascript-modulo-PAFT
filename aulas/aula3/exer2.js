/*
2. Crie uma função chamada menos. 
Caso seja passado apenas 1 parâmetro, retorne o valor negativo. 
Caso sejam passados 2, retorne a subtração dos dois. 
Exemplo:
console.log(menos(10)); //Imprime -10
console.log(menos(5,2)); //Imprime 3
*/

function menos(x, y) {
    if (y === undefined) {
        return -x;
    } else {
        return x - y;
    }
}

console.log(menos(10));
console.log(menos(5,2));
