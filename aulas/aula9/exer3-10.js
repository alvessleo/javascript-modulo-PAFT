// 3. Altere seu objeto círculo para utilizar a sintaxe com uma função 
// construtora chamada Circulo

function Circulo (raio) {
    this.raio = raio
}
  
Circulo.prototype.area = function () {
    return Math.PI*this.raio*this.raio
}
  
Circulo.prototype.perimetro = function () {
    return 2*Math.PI*this.raio
}


// 4. Crie 2 círculos de raios diferentes. E imprima sua área e perímetro

const Circulo1 = new Circulo(5)
console.log(Circulo1.perimetro())
console.log(Circulo1.area())

const Circulo2 = new Circulo(3)
console.log(Circulo2.perimetro())
console.log(Circulo2.area())

// Os exercicios abaixo sao interligados, logo será feito 1 codigo para todos eles.

// 5. Refatore o seu código para o círculo utilizar a sintaxe de classes
// 6. Crie o atributo do raio. Torne-o privado.
// 7. Adicione em sua classe um setter em que, caso o raio seja negativo, 
// retire o sinal (um raio setado como -3 se tornaria 3)
// 8. Adicione getters para o método raio e também para a área e o 
// perímetro.
// 9. Sobreponha o método toString() da sua classe Circulo para 
// imprimi-la como Circulo de raio ${raio}
// 10. Crie um método estático criar que aceita uma lista como 
// parâmetro e gera um círculo para cada número positivo em seu 
// interior, ignore os parâmetros que não puderem ser convertidos 
// para números.  
  

class Circulo{
    #raio;
    
    constructor(raio){
        this.#raio = raio;
    }

    get raio() {
        return this.#raio
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
    get calcAreaCirculo(){
        return Math.PI * (this.#raio * 2);
    }
    set calcAreaCirculo(area){ 
        this.#raio = Math.sqrt(area/Math.PI);
    }
    get calcPerimetroCirculo(){
        return 2 * Math.PI * this.#raio;
    }
    set calcPerimetroCirculo(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }

    toString(){
        return `Círculo de raio ${this.#raio}`;
    }

    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new circulo_constructor(raio))
    }
}