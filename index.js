class Retangulo{
   constructor( altura, largura){
    this.altura = altura;
	this.largura = largura;
  }
	calcularArea(){
		return (this.altura*this.largura)
	}
    area(){
		return this.calcularArea()
	}
}
let retangulo_1 = new Retangulo(23, 50)
let retangulo_2 = new Retangulo(32, 60)
let retangulo_3 = new Retangulo(50, 50)

console.log(retangulo_1.calcularArea())
console.log(retangulo_2.calcularArea())
console.log(retangulo_3.area())


 
