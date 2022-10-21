const player1 = document.querySelector('#jogador1');

const player2 = document.querySelector('#jogador2');

const buttonPlayer1 = document.querySelector('.point-for-player1');

let count1 = 0;
buttonPlayer1.onclick = () => {
    console.log(maxValue)
    count1++
    player1.innerText = count1;
    if(count1 == maxValue){
        alert('player 1 wins');
        player1.innerText = 0
        player2.innerText = 0
        count1 = 0
        count2 = 0
    }
}

const buttonPlayer2 = document.querySelector('.point-for-player2');

let count2 = 0;
buttonPlayer2.onclick = () => {
    count2++
    player2.innerText = count2;
    if(count2 == maxValue){
        alert('player 2 wins');
        player1.innerText = 0
        player2.innerText = 0
        count1 = 0
        count2 = 0
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
}