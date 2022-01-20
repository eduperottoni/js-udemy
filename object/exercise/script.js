const listSection = document.getElementById("list")
const form = document.getElementById("form")
const nameInput = document.getElementById("name")
const lastNameInput = document.getElementById("lastname")
const weightInput = document.getElementById("weight")
const heightInput = document.getElementById("height")
const peopleList = []

const getInputValues = () =>{
  return [
    nameInput.value,
    lastNameInput.value,
    Number(weightInput.value),
    Number(heightInput.value)
  ]
}

const clearInputs = () => {
  const inputsList = Array.from(document.getElementsByTagName("input"))
  inputsList.forEach( (item) => item.value = "")
}

const createPerson = ([name="Empty",lastName="Empty", weight=null, height=null]) => {
  return { name, lastName, weight, height }
}

const addPersonToList = (person) => peopleList.push(person)

const addPersonDiv = (person) => {
  const div = document.createElement('div')
  div.classList.add('person')
  Object.values(person).forEach((item) => {
    const p = document.createElement('p')
    p.innerHTML = item
    div.appendChild(p)
  } )
  listSection.appendChild(div)
}

const handleSubmit = () => {
  const inputsValues = getInputValues()
  const newPerson = createPerson(inputsValues)
  addPersonToList(newPerson)
  addPersonDiv(newPerson)
  clearInputs()
}

