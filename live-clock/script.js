const header = document.querySelector('header')
const input = document.querySelector('input')
const form = document.querySelector('form')
const respSection = document.querySelector('section#resp')

const getCurrentDate = () => new Date()

const createElement = (element,node,classes) =>{
  const newElement = document.createElement(element)
  const classesList = (!classes) ? [`${element}`] : [...classes]
  classesList.forEach(item => newElement.classList.add(item));
  node.appendChild(newElement)
  return newElement
} 

const addZero = (number) => number < 10 ? `0${number}` : number

const getWeekDayTxt = (weekDayNum) =>{
  switch (weekDayNum){
  case 0:
    return 'Sunday'
  case 1:
    return 'Monday'
  case 2:
    return 'Tuesday'
  case 3:
    return 'Wednesday'
  case 4:
    return 'Thursday'
  case 5:
    return 'Friday'
  case 6:
    return 'Saturday'
  default:
    return 'Invalid'
  }
}

const getMonthTxt = (monthNum) => {
  const monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December','Invalid']
  return (0 < monthNum < 11) ? monthsArray[monthNum] : monthsArray[7]
}

const formatDate = (dateObj) =>{
  const weekDay = getWeekDayTxt(dateObj.getDay())
  const monthDay = addZero(dateObj.getDate())
  const month = getMonthTxt(dateObj.getMonth())
  const year = dateObj.getFullYear()
  const hour = addZero(dateObj.getHours())
  const minutes = addZero(dateObj.getMinutes())
  const seconds = addZero(dateObj.getSeconds())

  return {weekDay, monthDay, month, year, hour, minutes, seconds}
}

const showCurrentDate = () => {
  const div1 = createElement('div',header,['day'])
  const div2 = createElement('div',header,['clock'])
  setInterval(() => {
    const {weekDay, monthDay, month, year, hour, minutes, seconds} = formatDate(getCurrentDate())
    div1.innerHTML = `${weekDay}, ${month} ${monthDay}, ${year}`
    div2.innerHTML = `${hour}:${minutes}:${seconds}`
  }, 1000);
}

showCurrentDate()

const getInputValue = () => input.value

const getBirthMs = () => {
  const birth = new Date(getInputValue())
  const birthMs = birth.getTime()
  return birthMs
}

const createRespElements = () =>{
  const divYears = createElement('div',respSection,['resp-years'])
  const spanYears = createElement('span',divYears,['resp-years-text'])
  const divMonths = createElement('div',respSection,['resp-months'])
  const spanMonths = createElement('span',divMonths,['resp-months-text'])
  const divDays = createElement('div',respSection,['resp-days'])
  const spanDays = createElement('span',divDays,['resp-days-text'])
  const divHours = createElement('div',respSection,['resp-hours'])
  const spanHours = createElement('span',divHours,['resp-hours-text'])
  const divMinutes = createElement('div',respSection,['resp-minutes'])
  const spanMinutes = createElement('span',divMinutes,['resp-minutes-text'])
  const divSeconds = createElement('div',respSection,['resp-seconds'])
  const spanSeconds = createElement('span',divSeconds,['resp-seconds-text'])
  return {spanYears, spanMonths, spanDays, spanHours, spanMinutes, spanSeconds}
}

const clearRespSection = () => {
  respSection.innerHTML = ''
}

const inputValidation = () =>{
  clearRespSection()
  const span = createElement('span',respSection,['validation-error'])
  span.innerHTML = `Data inválida, digite uma data no passado!`
}

const showTimeAlive = () =>{
  const birthMs = getBirthMs()
  const secondMs = 1000, minuteMs = 60*secondMs, hourMs = 60*minuteMs, dayMs = 24*hourMs, monthMs = 30*dayMs, yearMs = (365*dayMs + 6*hourMs)
  setInterval(() => {
    const currentMs = getCurrentDate().getTime()
    const msLived = (currentMs - birthMs)
    console.log(msLived)
    if (msLived < 0){
      inputValidation()
    }else{
      clearRespSection()
      const {spanYears, spanMonths, spanDays, spanHours, spanMinutes, spanSeconds} = createRespElements()

      spanYears.innerHTML = `<strong>Em anos:</strong>${parseInt(msLived/yearMs)}`
      spanMonths.innerHTML = `<strong>Em meses:</strong>${parseInt(msLived/monthMs)}`
      spanDays.innerHTML = `<strong>Em dias:</strong>${parseInt(msLived/dayMs)}`
      spanHours.innerHTML = `<strong>Em horas:</strong>${parseInt(msLived/hourMs)}`
      spanMinutes.innerHTML = `<strong>Em minutos:</strong>${parseInt(msLived/minuteMs)}`
      spanSeconds.innerHTML =`<strong>Em segundos:</strong>${parseInt(msLived/secondMs)}`
    }
  }, 1000);
}


const handleSubmit = (e) =>{
  e.preventDefault()
  showTimeAlive()
  //formatCurrentDate
  //showCurretDate
  //catchInputValue
  //calculateLivedTime
  //showLivedTime
}

form.addEventListener('submit', e => handleSubmit(e))