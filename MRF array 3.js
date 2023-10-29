// 3)Print the following details name, capital, flag using forEach condition
let reuqest = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', 'true')
reuqest.send()
reuqest.onload = function() {
 let countryData =  JSON.parse(this.response)
 countryData.forEach((element) => {
  console.log(element.name, element.capital, element.flag)
 })
}