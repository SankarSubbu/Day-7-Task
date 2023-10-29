// 4)Print the total population of countries using reduce function
let reuqest = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', 'true')
reuqest.send()
reuqest.onload = function() {
 let countryData =  JSON.parse(this.response)
 const population = countryData.reduce((acc, element) => {
  return acc + element.population
 })
 console.log(population)
}