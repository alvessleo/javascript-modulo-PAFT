/*
3. Crie uma função eCrescente que teste se a lista informada é ou não crescente. 
A sequencia não será considerada crescente se houver um número menor que seu antecessor imediato
*/

function eCrescente(lista) {
    for (let i=0; i < lista.length -1; i++) {
        if (lista[i] > lista[i+1]) {
            return "A lista não é crescente!";
        }
    }
    return "A lista é crescente!";
}

let lista1 = [1,2,3,4,5]
let lista2 = [6,2,2,4,5]

console.log(eCrescente(lista1));
console.log(eCrescente(lista2));