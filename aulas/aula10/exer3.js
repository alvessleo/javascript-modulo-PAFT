// 3. Crie 3 timers A (0.5s), B (0.2s) e C (0.8s). Os timers devem produzir os 
// valores a=5, b=10 e c=2, respectivamente. Ao final dos 3 timers, deve ser 
// calculada a expressão: a + b * c. O programa deve continuar funcionando 
// mesmo se alterarmos os tempos dos timers entre uma execução e outra.

let counter = 0
let a
let b
let c

function expressao(){
  if(counter === 3){
    let formula = a + b * c
    console.log(formula)
  }
}

const A = setTimeout(() => {
  a = 5
  counter++
  expressao()

}, 500);

const B = setTimeout(() => {
  b = 10
  counter++
  expressao()

}, 200);

const C = setTimeout(() => {
  c = 2
  counter++
  expressao()
  
}, 800);