import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// // *** EXAMPLE ***
// export function getWelcome () {
//   return request
//     .get(`${serverURL}/welcome`)
//     .then(response => response.body)
// }
// // ***   ***   ***

export function getQuote () {
  return request
  .get(`${serverURL}/quotes`)
  .then(response => {
    // console.log(response)
    return response.text
  })
}
