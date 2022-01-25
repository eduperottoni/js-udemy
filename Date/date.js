const data = new Date(0) //Timestamp Unix
console.log(data)

const aDay = 60*60*24*1000 //Quantity of miliseconds in a day
const aDayPassed = new Date(0 + aDay)
console.log(aDayPassed)

const date = new Date()
console.log(date)

const born = new Date(2001, 6, 18, 19, 30, 15, 3000)
console.log(born)

const born2 = new Date(2001, 6, 18, 19, 30)
console.log(born2)

const date2 = new Date('2001-07-18 19:30:15')
console.log(date2)

const date3 = new Date('2001-07-18 19:30:15')
console.log(date3.toString())

const date4 = new Date('2001-07-18 19:30:15')
console.log('Dia',date4.getDate())
console.log('Mês',date4.getMonth())
console.log('Ano',date4.getFullYear())
console.log('Hora',date4.getHours())
console.log('Minuto',date4.getMinutes())
console.log('Segundo',date4.getSeconds())
console.log('Milisegundos',date4.getMilliseconds())
console.log('Dia Semana',date4.getDay())

const date5 = Date.now()
console.log(date5)


const zeroAEsquerda = (number) => (number < 10) ? `0${number}` : number

function formataData(data){
  const diaMes = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = data.getFullYear()
  const hora = zeroAEsquerda(data.getHours())
  const minutos = zeroAEsquerda(data.getMinutes())
  const segundos = zeroAEsquerda(data.getSeconds())
  
  return `${diaMes}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`
}
const date6 = new Date
console.log(formataData(date6))