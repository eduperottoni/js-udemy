const num1 = 5
const num2 = 10
const numTxt = '6'

let resultado = num1 + num2
console.log(resultado)
resultado = num1 + numTxt //Neste caso, o operador + irá concatenar
console.log(resultado)

let contador = 0
contador++
console.log(contador)
++contador 
contador--
console.log(contador)

let cont = 5
console.log(cont++) //Executa a função de log e depois incrementou
console.log(cont)

let i = 5
console.log(--i) //Primeiro atribui e depois executa a ação

const passo = 2
let contador2 = 0

contador2 += passo
console.log(contador2)
contador -= passo
console.log(contador2)

console.log(10 > 10)
console.log(45 >= '45')
console.log(10 <= 11)
console.log(100 != '100')
console.log(100 !== '10')
console.log(100 == '100')
console.log(100 === '100')

//Short-circuit
console.log('Eu' && 'você') //returns 'você', cause && operator did not find a false expression
console.log('Eu' && NaN) //returns NaN, cause && operator find

function falaOi(){
  console.log('Olá')
}
let vaiExecutar = false
vaiExecutar && falaOi()

console.log(0 || false || null || 'Luiz Otávio' || true)

let userColor = null
const defaultColor = 'black'
const systemColor = userColor || defaultColor
console.log(systemColor)
