const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM2MmNkMGMzLTcyOTAtNDA1My05ZjJhLWU4MGYxMDMyMzk1MS0xNjYyOTg0MTY5NjA2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOWIyMGEwYjQtMTUwZC00ODhiLWI0ZmQtNGRmNzE5NThkMjU2IiwidHlwZSI6InQifQ.96L4LBiGSNhy3VmifH6tA-UQ_ECtjmifZFr8Wm3y7H4'

cypress.run({
  browser: 'chrome',
  baseUrl: 'http://localhost:3000',
  env: {
    apiUrl: 'http://localhost:3333'
  }
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})