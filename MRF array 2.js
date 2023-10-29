// 2) Get all the countries with a population of less than 2 lakhs using Filter condition
let reuqest = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', 'true')
reuqest.send()
reuqest.onload = function() {
 let countryData =  JSON.parse(this.response)
 const populate = countryData.filter((element) => {
  return element.poulation < 200000
 })
 console.log(populate)
}