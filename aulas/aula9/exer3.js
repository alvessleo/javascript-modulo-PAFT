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