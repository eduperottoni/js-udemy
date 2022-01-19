let num1 = 5
let num2 = 15
let num3 = 18.1654635463546496413516851

console.log(num1.toString()+num2)
console.log(num2.toString(2)) //Representação binária de num2
console.log(num2.toString(8)) //Representação octal de num2
console.log(num2.toString(16)) //Representação hexadecimal de num2
console.log(num3.toFixed(5))
console.log(Number.isInteger(num3))
console.log(Number.isNaN(num1 * 'Ola'))

let num4 = 0.7
let num5 = 0.1
console.log(num4+num5) //Imprecisões causadas pelo padrão IEEE 754-2008
