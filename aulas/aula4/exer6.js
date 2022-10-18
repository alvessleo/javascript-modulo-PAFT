/*
Crie a função justDate que recebe uma data e retorna a mesma data, mas com os campos de tempo zerados
*/

function justDate(data){
    data.setHours(0, 0, 0, 0);
    return data
  }
  
  let date = new Date;
  console.log(justDate(date))