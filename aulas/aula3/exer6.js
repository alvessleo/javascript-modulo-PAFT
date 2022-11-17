/*6. Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista com todos os valores desse campo sem repetição*/

let lista = [
    {nome: "Leonardo", cor: "branco"},
    {nome: "Jose", cor: "branco"},
    {nome: "Joao", cor: "branco"},
    {nome: "Lucas", cor: "branco"},
    {nome: "Julio", cor: "negro"},
    {nome: "Leonardo", cor: "negro"},
    {nome: "Joao", cor: "negro"},
    {nome: "Marcos", cor: "negro"},
    {nome: "Marcos", cor: "negro"},
    {nome: "Julia", cor: "pardo"},
    {nome: "Leonardo", cor: "pardo"},
    {nome: "Junior", cor: "pardo"},
    {nome: "Julio", cor: "pardo"},
    {nome: "Julio", cor: "outro"},
    {nome: "Tiago", cor: "outro"},
  ]
  
  
  
  function noRepet(lista, campo){
    let newList = [];
    
    for(let item of lista){
      if(newList.includes(item[campo])){
        console.log("Nome repetido excluido da nova lista!")
      } else{
        newList.push(item[campo])
      }
  
    }
  
    console.log(newList);
  }
  
  noRepet(lista, "nome")