// 1) Get all the countries from Asia continent / region using Filter condition

let reuqest = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', 'true')
reuqest.send()
reuqest.onload = function() {
 let countryData =  JSON.parse(this.response)
 const asia = countryData.filter((a) => {
  if(a.region === 'Asia'){
   return a.name
  }
 })
 console.log(asia)
}