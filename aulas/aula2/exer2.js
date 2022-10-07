//2. Crie uma lista com 15 pessoas lendo seu nome e cor.
//•As cores podem ser “branco”, “negro”, “pardo” e “outro”
//•Em seguida, mostre quantas pessoas tem cada cor
//•Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch

let pessoas = [
    {nome: "Leonardo", cor: "branco"},
    {nome: "Jose", cor: "branco"},
    {nome: "Alberto", cor: "branco"},
    {nome: "Lucas", cor: "branco"},
    {nome: "Julio", cor: "negro"},
    {nome: "Cezar", cor: "negro"},
    {nome: "Joao", cor: "negro"},
    {nome: "Giulia", cor: "negro"},
    {nome: "Marcos", cor: "negro"},
    {nome: "Julia", cor: "pardo"},
    {nome: "Mariana", cor: "pardo"},
    {nome: "Junior", cor: "pardo"},
    {nome: "Elizabeth", cor: "pardo"},
    {nome: "Julio", cor: "outro"},
    {nome: "Tiago", cor: "outro"},
  ]
  
  
  
  function myFilterForBranco(pessoa){
    if(pessoa.cor === "branco"){
      return true
    } else{
      return false
    }
  }
  function myFilterForNegro(pessoa){
    if(pessoa.cor === "negro"){
      return true
    } else{
      return false
    }
  }
  function myFilterForPardo(pessoa){
    if(pessoa.cor === "pardo"){
      return true
    } else{
      return false
    }
  }
  function myFilterForOutro(pessoa){
    if(pessoa.cor === "outro"){
      return true
    } else{
      return false
    }
  }
  
  let resultadoBranco = pessoas.filter(myFilterForBranco)
  console.log("O número de pessoas da cor branca são ", resultadoBranco.length ,", sendo elas: " , resultadoBranco)
  
  let resultadoNegro = pessoas.filter(myFilterForNegro)
  console.log("O número de pessoas da cor negra são ", resultadoNegro.length ,", sendo elas: " , resultadoNegro)
  
  let resultadoPardo = pessoas.filter(myFilterForPardo)
  console.log("O número de pessoas da cor pardo são ", resultadoPardo.length ,", sendo elas: " , resultadoPardo)
  
  let resultadoOutro = pessoas.filter(myFilterForOutro)
  console.log("O número de pessoas da cor pardo são ", resultadoOutro.length ,", sendo elas: " , resultadoOutro)