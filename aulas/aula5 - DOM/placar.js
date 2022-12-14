const player1 = document.querySelector('#jogador1');

const player2 = document.querySelector('#jogador2');

const buttonPlayer1 = document.querySelector('.point-for-player1');

const winner = document.querySelector('.winner');

const newWinner = document.createElement('div');
newWinner.style.color = 'green';

let count1 = 0;
buttonPlayer1.onclick = () => {
    console.log(count1)
    console.log(maxValue)
    count1++
    console.log(count1)
    player1.innerText = count1;
    if(count1 == maxValue){
        newWinner.innerText = 'Jogador 1 Ganhou';
        winner.appendChild(newWinner);
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
    }
}

const buttonPlayer2 = document.querySelector('.point-for-player2');

let count2 = 0;
buttonPlayer2.onclick = () => {
    count2++
    player2.innerText = count2;
    if(count2 == maxValue){
        newWinner.innerText = 'Jogador 2 Ganhou';
        winner.appendChild(newWinner);
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
    }
}


// Tratando o Selector
const selector = document.querySelector('#pontuacao-maxima');

for(i = 1;i < 22; i++){
    let options = document.createElement('option');
    options.innerText = i;
    options.value = i
    selector.appendChild(options);
}

let maxValue = 1;

selector.addEventListener('change', function(){
    for(let opt of selector){
        if(opt.selected){
            maxValue = opt.value
        }
            
    }
})


// Button reset 
const reset = document.querySelector('#reset');
reset.onclick = () => {
    player1.innerText = 0
    player2.innerText = 0
    count1 = 0
    count2 = 0
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    winner.removeChild(newWinner);
}