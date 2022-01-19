const number = Number(prompt("Digite um número"))

const title = document.getElementById("title")
const divText = document.getElementById("texto")

title.append(`Seu número é ${number}`) 
divText.innerHTML += `<p>Raíz quadrada: ${number**(1/2)}</p>`
divText.innerHTML += `<p>${number} é inteiro? ${Number.isInteger(number)}</p>`
divText.innerHTML += `<p>${number} é NaN? ${Number.isNaN(number)}</p>`
divText.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`
divText.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`
divText.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`
divText.innerHTML += `<p>${number} em binário: ${number.toString(2)}</p>`
