// 5. Escreva duas funções puras que retornem Promises: •A primeira, makeAllCaps(), receberá um array de palavras e 
//tornará todas maiúsculas. Ela rejeitará caso o array contenha um dado que não seja string.
// •A segunda, sortWords(), ordenará as palavras em ordem alfabética.
// •Em seguida, teste-as

let array = ["pessego", "maça", "pera", 10]
let array2 = ["pessego", "maça", "pera"]
let newArray = []

function makeAllCaps(array){
  return new Promise((resolve, reject) => {
    for(let item of array){
      if(typeof item == "string"){
        item = item.toUpperCase();
        newArray.push(item)
      } else{
        reject(item)
      }
    }
    resolve(newArray)
  })
}


function sortWords(newArray){
  return new Promise((resolve, reject) => {
    resolve([...newArray].sort());
  })
}

makeAllCaps(array)
    .then(sortWords)
    .then(newArray => console.log(`O seu array é: ${newArray}`))
    .catch(notString => console.log(`A seguinte palavra não é uma string: ${notString}`));

