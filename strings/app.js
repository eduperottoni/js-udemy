const name = prompt('Digite o seu nome completo: ')

document.body.innerHTML += `O seu nome é ${name} <br>`
document.body.innerHTML += `O seu nome tem ${name.length} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é ${name[1]} <br>`
document.body.innerHTML += `O primeiro índice de A no seu nome é ${name.search('a')} <br>`
document.body.innerHTML += `O último índice de A no seu nome é ${name.lastIndexOf('a')} <br>`
document.body.innerHTML += `As 3 últimas letras do seu nome são: ${name.slice(-3)} <br>`
document.body.innerHTML += `As palavras do seu nome são: ${name.split(' ')} <br>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()} <br>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()} <br>`
