const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const form = document.getElementById('imc-calc-form')
const respSpan = document.querySelector('.imc-calc-resp-text')
const respDiv = document.querySelector('.imc-calc-resp')
const loader = document.querySelector('.loader')
const restartButton = document.querySelector('.imc-calc-resp-button')

const getInputValue = (item) =>{
  return Number(item.value)
}

const calculateImc = (weight, height) =>{
  const imc = (weight/(height**2)).toFixed(2)
  return imc
}

const clearInputs = (inputsList) =>{
  inputsList.forEach( item => {
    item.value = ''
  });
}

const rankImc = (imcValue) =>{
  if (imcValue <= 18.5){
    return 'under weight'
  }else if (imcValue <= 25){
    return 'normal weight'
  }else if (imcValue <= 30){
    return 'over weight'
  }else if (imcValue <= 35){
    return 'grade 1 of obesity'
  }else if (imcValue <= 40){
    return 'grade 2 of obesity'
  }else{
    return 'grade 3 of obesity'
  }
}

const defineSituation = (imcValue) =>{
  const rankResult = rankImc(imcValue)
  const status = (18.5 >= imcValue || imcValue > 25) ? 'worrisome' : 'good'
  const message = `Your IMC é <strong>${imcValue}</strong><br>You're on <strong>${rankResult}</strong>. That is <strong>${status}</strong>!`
  return {message, status}
}

const toggleBox = (element,order) =>{
  if (order === 'activate'){
    element.classList.add('active')
  }else if (order === 'desactivate'){
    element.classList.remove('active')
  }
}

const showResponse = (imcValue) =>{
  toggleBox(loader,'activate')
  toggleBox(form, 'desactivate')
  respDiv.classList.remove("worrisome","good")
  setTimeout(() => {
    const {message, status} = defineSituation(imcValue)
    toggleBox(loader,'desactivate')
    respDiv.classList.add('active', status)
    respSpan.innerHTML = message
  },4000)
}

const handleSubmit = (e) =>{
  e.preventDefault();
  const weight = getInputValue(weightInput)
  const height = getInputValue(heightInput)
  const imc = calculateImc(weight, height)
  showResponse(imc)
}

const handleRestart = () =>{
  clearInputs([weightInput, heightInput])
  toggleBox(form,'activate')
  toggleBox(respDiv,'desactivate')
}

form.addEventListener('submit', handleSubmit)
restartButton.addEventListener('click', handleRestart)

