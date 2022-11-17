// 6. Crie a função request(url, verbo='GET') que utilize o XMLHttpRequest na forma de um Promise. 
//•Use-a para fazer o mesmo get que fizemos no exemplo 2. 
//Não esqueça de tratar possíveis erros com o .catch.

let url = 'https://jsonplaceholder.typicode.com/posts'
let verbo = 'GET'

function request(url, verbo){
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(verbo, url);
    if (req.status >= 200 && req.status <= 299) { 
      resolve(req.response)    
      console.log(req.response);     
    } else {
      reject(req.message)
      console.log(`${req.status}: ${req.message}`);
    }

    
  })
}

req.error = () => { console.log("Network error"); } 
req.send();

