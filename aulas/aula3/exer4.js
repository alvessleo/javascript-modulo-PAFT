/*4. Crie a função maior, que encontre o maior entre todos os valores passados em seus argumentos. 
console.log(maior(1,10,-1,5)); //Imprime 10
console.log(maior(1,-100,5)); //Imprime 5*/

function maior(num1, num2, num3){
    let maior_numero
  
    if (num1 > num2 && num1 > num3) {
      maior_numero = num1
    } else if (num2 > num1 && num2 > num3) {
      maior_numero = num2
    } else{
      maior_numero = num3
    }
  
    console.log("O maior numero é:", maior_numero)
  }
  
  maior(1, 10, -1.5);
  maior(1, -100, 5);