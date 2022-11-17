// 1. Gere uma lista de objetos com o nome e ano de todos os álbuns da Marisa Monte

const albuns = [{nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
            {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
            {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
            {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
            {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},    
            {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
            {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
            {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
            {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
            {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}];

let result = []

const marisaMonte = albuns.filter(album => album.cantor === "Marisa monte").map(album => ({nome: album.nome, ano: album.ano}));

console.log(marisaMonte)


// 2. Gere uma lista contendo o nome de todos os cantores e álbuns. 
//A lista deve conter só os textos, não objetos.

let array = []

for(let obj of albuns){
  array.push(obj.cantor)
  array.push(obj.nome)
}

console.log(array)



// 3. Calcule a média da nota dos discos anteriores ao ano de 2005

const anos = albuns.filter(album => album.ano < 2005)

let soma = 0
for(let nota of anos){
  soma += nota.nota
}

let media = soma/anos.length
console.log(media.toFixed(2))



// 4. Gere uma lista contendo o nome de todos os cantores, sem repetições

let array2 = []

const cantores = albuns.filter(album => album.cantor)
for(let nome of cantores){
  if(array2.includes(nome.cantor)){
    console.log("Repetiu")
  } else{
    array2.push(nome.cantor)
  }
}

console.log(array2)


