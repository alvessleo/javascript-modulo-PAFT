/*
7. Escreva a versão não recursiva e a 
recursiva de uma função para calcular o n-ésimo termo da sequencia de fibonnaci:

Ex.: Fib(6) = 13, pois:
1,1,2,3,5,8,13,21...

Formula = 
1,𝑠𝑒 𝑛 = 0
1,𝑠𝑒 𝑛 = 1
𝑓𝑖𝑏 𝑛 −1 +𝑓𝑖𝑏(𝑛 −2),𝑠𝑒 𝑛 > 1
*/


const fibonacci = num => {

    if(num < 2) {
    return num
    }
    
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
  
console.log(fibonacci(7));
