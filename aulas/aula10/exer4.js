// 4. Escreva uma função testNum que receba um número como um argumento e retorne um Promiseque resolve em 
//caso o número seja maior que dez, ou rejeite caso contrário. Use-o exibindo uma mensagem em cada caso.

function testNum(numero){
    return new Promise((resolve, reject) => {
  
      if (numero > 10){
        resolve(numero)
      } else{
        reject(numero)
      }
      
    });
  }
  
  testNum(10)
    .then(numero => console.log(`O numero ${numero} é maior que 10.`))
    .catch(numero => console.log(`O numero ${numero} é menor ou igual a 10`))