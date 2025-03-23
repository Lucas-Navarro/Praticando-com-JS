// Array de objeto

/** Exercicio
    1. Criar uma array vazia
    2. Criar uma Classe Aluno 
    3. Adicionar três objetos
    4. Adicionar os objetos criados para a Array Vazia
    5. Mostrar se for curso "ADS" aparecer "Curso Legal" se for outro
    "curso chato"
*/
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