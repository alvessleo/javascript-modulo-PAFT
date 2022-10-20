const player1 = document.querySelector('#jogador1');

const player2 = document.querySelector('#jogador2');

const buttonPlayer1 = document.querySelector('.point-for-player1');

let count1 = 0;
buttonPlayer1.onclick = () => {
    count1++
    player1.innerText = count1;
}

const buttonPlayer2 = document.querySelector('.point-for-player2');

let count2 = 0;
buttonPlayer2.onclick = () => {
    count2++
    player2.innerText = count2;
}


// Tratando o Selector
const selector = document.querySelector('#pontuacao-maxima');

for(i = 1;i < 22; i++){
    let options = document.createElement('option');
    options.innerText = i;
    selector.appendChild(options);
}


// Quando um jogador vencer
if (options[i] === count1){
    alert('teste')
}

// Button reset 
const reset = document.querySelector('#reset');
reset.onclick = () => {
    player1.innerText = 0
    player2.innerText = 0
    count1 = 0
    count2 = 0
}