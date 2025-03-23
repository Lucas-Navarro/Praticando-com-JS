function Pessoa(a,b){
    this.nome = a
    this.idade = b
}

var x = new Pessoa ("Lucas", 10,11111111)
var y = new Pessoa ("Asel", 23,111111111)

console.log(x)
console.log(y)

function Carro(a,b,c,d, e){
    this.nomeCarro = a
    this.ano = b
    this.cor = c
    this.modelo = d
    this.popular = e
    
}

var x = new Carro("Uno", "2004", "Azul", "Fiat", true)

console.log(x)

// Laço de repetição
t = [1,2,3,4]
t.forEach(b => {
    console.log(b)
});
