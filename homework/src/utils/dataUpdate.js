import "babel-polyfill"
import "whatwg-fetch"

const update = async(item={}) => {
  return window.fetch(`http://localhost:3001/agents/${item.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
  // .then((res) => res.text())
  // .then((resTxt) => {
  //   const resJson = JSON.parse(resTxt)
  //   console.log('res: ', resJson)
  // })
  .catch((err) => {
    console.log('error occured when update data: ', err)
  })
}

export default update

