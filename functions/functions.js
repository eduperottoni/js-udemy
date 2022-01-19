function saudacao(){
  console.log('Olá!')
}
saudacao()

//Function with parameter
function despedida(nome){
  console.log(`Tchau, ${nome}`)
}
despedida('Eduardo')

//Function with 2 parameters
function sum(x,y){
  return x+y
}
console.log(sum(2,3))

//Function with default parameters
function soma(x=4,y=5){
  return x+y
}
console.log(soma())


//Anonymous function
const teste = function(){
  console.log('Oi')
}
const raiz = function(n){
  return n ** (1/2)
}
teste()
//Arrow function
const teste = () => console.log('Oi')
const raiz = (n) => n ** (1/2)
//Self-summoning function