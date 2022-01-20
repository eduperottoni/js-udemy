const nome = 'Eduardo' //String. As aspas podem ser simples, duplas ou crazes
console.log(typeof nome)

const num = 15 //number (integer)
console.log(typeof num)

const number = 10.5 //number (de ponto flutuante)
console.log(typeof number)

let aluno
console.log(typeof aluno)

let sobreNome = null
console.log(typeof sobreNome)

let isHere = 5 > 4
console.log(typeof isHere)

//Immutability of a string
let name = 'Eduardo'
name[0] = 'L'
console.log(name[0]) //Returns 'E', 'cause string is immutable

let a = 6
let b = a //Copy only, it's not a reference data-type, it's primitive
a++
console.log(a, b) //b is different than a, because number is not a reference type

let array = [1,2,3,4]
let array2 = array //It makes a reference from array2 to array, that is, both point to the same local in the memory
array2.push(5)
console.log(array,array2) //array is equal to array2, because array is a reference data-type

let array3 = [1,2,3,4,5,6,7,8]
let array4 = [...array3] //Now it's a copy, a spread was done
array3.push(9)
console.log(array3,array4)

const pessoa = {
  nome:'Eduardo',
  sobrenome:'Perottoni'
}
const pessoa2 = pessoa //Object is a reference datatype, than pessoa2 and pessoa now poit to the same local in memory
pessoa2.nome = 'Joka'
console.log(pessoa, pessoa2) //pessoa and pesso2 has the same value

const pessoa3 = {...pessoa} //Now it's a copy, the object was spreaded
pessoa3.nome = 'Maria'
console.log(pessoa, pessoa3)