const data = new Date
const weekDay = data.getDay()
const diaSemanaTxt = getWeekDay(weekDay)
switch (weekDay){
case 0:
  diaSemana = 'Domingo'
  break
case 1:
  diaSemana = 'Segunda'
  break
case 2:
  diaSemana = 'Terça'
  break
case 3:
  diaSemana = 'Quarta'
  break
case 4:
  diaSemana = 'Quinta'
  break
case 5:
  diaSemana = 'Sexta'
  break
case 6:
  diaSemana = 'Sábado'
  break
default:
  diaSemana = 'Dia inválido'
}

console.log(weekDay, diaSemanaTxt)

function getWeekDay(number){
  switch (number){
  case 0:
    return 'Domingo'
  case 1:
    return 'Segunda'
  case 2:
    return 'Terça'
  case 3:
    return 'Quarta'
  case 4:
    return 'Quinta'
  case 5:
    return 'Sexta'
  case 6:
    return 'Sábado'
  default:
    return 'Dia inválido'
  }
}