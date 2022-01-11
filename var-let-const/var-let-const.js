//VARIÁVEIS COM LET
let nome = 'Eduardo' //Declaração e inicialização
console.log(nome) //Saída: 'Eduardo'
nome = 'Juliana' //reinicialização (reatribuição)
console.log(nome) //Saída: 'Juliana'
//let nome = 'Bárbara' //Retorna erro: variável declarada com let não pode ser redeclarada

let number //Declaração sem inicialização
console.log(number) //Saída: undefined
number = 789 //reinicialização
console.log(number) //Saída: 789

//VARIÁVEIS COM VAR
var nomeCompleto = 'Eduardo Perottoni'
console.log(nomeCompleto) //Saída: 'Eduardo Perottoni'
nomeCompleto = 'Joice Pinheiro'
console.log(nomeCompleto) //Saída: 'Joice Pinheiro'
var nomeCompleto = 'Maria Eduarda'
console.log(nomeCompleto) //Saída: 'Maria Eduarda'. Variável declarada com var pode ser redeclarada

//CONSTANTES COM CONST
//const numero //Retorna erro: Declaração sem inicialização
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero
console.log(resultado)


//EXEMPLO EXTRA
const firstName = 'Eduardo'
const lastName = 'Perottoni'
const age = 20
const weight = 70
const heightInM = 1.75
let imc;
let birthYear;
imc = weight/heightInM**2
birthYear = 2022 - age
console.log(`${firstName} ${lastName} is ${age} years-old. He/She was born in ${birthYear}, weighs ${weight}Kg, measures ${heightInM}m and her/his IMC is ${imc}.`)