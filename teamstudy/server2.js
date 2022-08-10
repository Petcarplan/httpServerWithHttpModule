const http = require('http')
const express = require('express')
const { putpractice } = require('/editpost') 

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ message: '/ pong' })
})

app.put('/update', putpractice) 

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('put서버연결')
})
