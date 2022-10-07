//3. Crie o jogo de adivinhar um número de 1 até 100.
//•Caso ele entre um número maior escreva “Maior”
//•Caso ele entre um número menor escreva “Menor”
//•Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e acabe o jogo
//•O jogo deve perguntar até o usuário desistir ou falar o valor correto.

let numero_secreto = Math.floor(Math.random() * 100 + 1);

console.log(numero_secreto);

let guess = prompt("Digite um numero inteiro entre 1 e 100: ");

while(guess !== numero_secreto){

  if (guess <= 0 || guess >= 100){
    console.log("Desistiu?")
    break
  } else if(guess > numero_secreto){
    console.log("Menor");
  } else if (guess < numero_secreto){
    console.log("Maior");
  } else{
    console.log("Ganhou");
    break
  }

  guess = prompt("Digite um numero inteiro entre 1 e 100: ");
}