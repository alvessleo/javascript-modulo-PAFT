/*5. Escreva sua própria versão da função join. 
Esta função recebe uma lista e um separador (por padrão ",") e gera o texto dos objetos em seu interior separados por esse separador. 
Não se esqueça que o separador não ocorre após o último objeto da lista*/

function myJoin(lista){
    let result = ""
    for (let i = 0; i < lista.length-1 ; i++) {
      result += lista[i];
      result += ",";
    }
  
    result += lista[lista.length - 1]
    console.log(result)
  }
  
  let myList = ["Pera", "Maca", "Uva"]
  
  myJoin(myList)