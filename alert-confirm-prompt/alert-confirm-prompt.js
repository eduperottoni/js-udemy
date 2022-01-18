// window.alert('Qualquer mensagem')
// console.log(confirm('Opa'))
// prompt('Digite o seu nome: ')

// const confirmado = confirm('Eduardo é bonito? ')

do{
  const num1 = prompt('Digite um número:')
  const num2 = prompt('Digite outro número:')
  const result = parseInt(num1) + parseInt(num2)
  alert(`${num1} + ${num2} = ${result}`)
}while(confirm('Deseja continuar?'))
alert('Obrigado por sua participação!')
