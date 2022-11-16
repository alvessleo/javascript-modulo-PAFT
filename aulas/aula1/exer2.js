// 2.Leia um número e aplique sobre ele a conjectura de Collatz. Ela diz que uma sequencia pode ser feita com base na seguinte regra:
// •Se o número n for par, o próximo é n / 2
// •Se for ímpar é 3n+1
// •A sequencia termina em 1

let num = 8;
console.log(num)

function collatz() {
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
      console.log(num);
    } else {
      num = (num * 3) + 1;
      console.log(num)
    }
  } 

  console.log("sequencia terminada")
}

collatz(num);