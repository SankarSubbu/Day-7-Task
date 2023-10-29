// 5)Print the country which use US Dollars as currency
let reuqest = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', 'true')
reuqest.send()
reuqest.onload = function () {
 let countryData = JSON.parse(this.response)
 for (let i = 0; i < countryData.length; i++) {
  if (countryData[i].currencies[0].code === "USD") {
   console.log("name:", countryData[i].name, "==>", countryData[i].currencies[0].code)
  }
 }
}