const date = new Date
const hour = date.getHours()
console.log(hour)
//Simple
if (hour < 12){
  console.log('Good morning')
}
//Compound
if (hour < 12){
  console.log('Good morning')
}else if (hour < 18){
  console.log('Good afternoon')
}else{
  console.log('Good evening')
}