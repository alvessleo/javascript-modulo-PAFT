/* 
query = consulta. A diferenca entre o Selector normal 
e o All é que um pega o primeiro que encontra e o All pega todos
*/
const h1 = document.querySelector('h1');
h1.style.color = 'rgb(0, 255, 0)';
h1.onclick = () => {
    alert('ue')
}

const h1s = document.querySelectorAll('h1');
for (const h of h1s){
    h.style.backgroundColor = 'red';
    h.innerText += ' innerText';
}

// Pegar pela classe
const itens = document.querySelector('.itens');
//document.getElementsByClassName('itens');     OUTRA FORMA DE FAZER

const newItem = document.createElement('li');
newItem.innerText = 'item novo';
newItem.classList.add('item3');
newItem.addEventListener('mouseenter', function(){
    console.log('entered');
});
//newItem.onmouseenter      OUTRA FORMA DE FAZER

itens.appendChild(newItem);

// Pegar pela ID
const item1 = document.querySelector('#item1');

const input = document.querySelector('input');
/*
AQUI ELE SOBRE ESCREVE A PRIMEIRA FUNCAO

input.oninput = function(event){
    h1.innerText = input.value;
};

input.oninput = function(event){
    newItem.innerText = input.value;
};*/


// DESSA FORMA OS 2 INPUTS RECEBEM A FUNCAO
input.addEventListener('input' ,function(event){
    h1.innerText = input.value;
});

input.addEventListener('input' ,function(event){
    newItem.innerText = input.value;
});