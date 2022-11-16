//1. Crie as variáveis peso e altura leia e as inicialize com seu peso e sua altura. 
//Calcule o valor do IMC (peso / altura2).
//Associe o valor verdadeiro a variável obeso caso o valor do IMC seja maior ou igual a 30. 
//Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis: O valor do IMC para pesoquilos e alturametros é de imc.

let peso = 72;
let altura = 1.83;

function calculaIMC(peso, altura){
  let resultIMC = peso/(altura*2)
  if(resultIMC >= 30){
    let obeso = true
  }
  console.log("O valor do IMC para", peso, "quilos e", altura, " metros é de: ", resultIMC.toFixed(2))
};

calculaIMC(peso, altura);