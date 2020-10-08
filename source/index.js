// function repeatMessage(message, repeatCount){
//     let messageToShow = "";
//     for (let index = 0; index < repeatCount; index++) {
//         messageToShow += message; 
//     }
//     return messageToShow;
// }

// console.log(repeatMessage("hello", 3))



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = {
    repeatMessage,

}