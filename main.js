// FUNCITION

//let a = 5 //     escopo local
//var b = 5 //     escopo global continua viva, enquanto a função já foi executada
//const c = 7
/**
var a = 5
var b = 6

function soma(x, y){
    return(x+y)
}

console.log(soma(a,b))

const soma = (a,b)=>{        //aero function
    return a+b
}
*/


//Manipulação de Array
/**
var k = [1,2,3,4]

console.log(k)
console.log(k.length) // Conta quantidades de elementos na array

console.log(k[1])


k.push(5) // Adicionando um valor com push
console.log(k)
console.log(k.length)

k.pop() // tira elementos da array
k.pop()
console.log(k)
console.log(k.length)

 */
 /**
function Pessoa(a,b){
    this.nome = a
    this.idade = b
}

var x = new Pessoa ("Lucas", 10,11111111)
var y = new Pessoa ("Asel", 23,111111111)

console.log(x)
console.log(y)
 */
/**
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

*/


// Array de objeto

a = [
    {nome: "Lucas", idade: 20},
    {nome: "Nucas", idade: 30}
]

objetos = []

function Aluno(a,b,c){
    this.aluno = a
    this.rgm = b
    this.curso = c
}

var x = new Aluno("Lucas", 6368231, "ADS")
var y = new Aluno("Alanna", 6364231, "Nutrição")
var z = new Aluno("Souza", 6262231, "ADS")

objetos.push(x)
objetos.push(y)
objetos.push(z)



objetos.forEach(Element => {
    if (Element.curso == "ADS"){
        console.log(Element.curso, "Curso legal")
    }
    else{
        console.log(Element.curso, "Curso chato")
    }
})