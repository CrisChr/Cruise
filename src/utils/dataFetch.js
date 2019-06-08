import "babel-polyfill"
import "whatwg-fetch"

const data = async() => {
  return window.fetch('http://localhost:3001/agents')
  .then((response) => response.text())
  .then((responseText) => {
    const jsonRes = JSON.parse(responseText)
    return jsonRes
  }).catch(err => {
    console.log("error ocurred when fetch data from server: ", err)
  })
}

export default data