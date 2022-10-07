//1. Crie uma lista com alguns valores e imprima:
//•Os valores positivos
//•A média de todos os valores

const numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 50]
let soma = 0

for (let num of numeros){
  if(num > 0){
    console.log(num)
  }
  soma += num
}

let media = soma / numeros.length
console.log("A média de todos os valores é:", media.toFixed(2))