const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})


app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
  const username = 'Yusrina Mastura'
  const password = 'yusrina123'

  if (req.body.username != username) {
    res.statusCode = 400
    res.json({status: 'error, username not found'})
  }

  if (req.body.password != password) {
    res.statusCode = 401
    res.json({status: 'error, wrong password'})
  }

  res.json({status: 'success'})
  
})

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`)
})