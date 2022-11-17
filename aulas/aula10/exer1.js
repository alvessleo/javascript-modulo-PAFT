// 1. Crie um timer que imprima o texto “PUCPR” a cada meio segundo. 
// Pare o timer após 5 execuções.

let counter = 1;

const timer = setInterval(() => {
  if (counter === 5) {
    clearInterval(timer);
  }
  console.log("PUCPR")
  counter++
}, 500);
