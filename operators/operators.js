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