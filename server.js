const http = require('http')
const express = require('express')
const { createUser, createpost } = require('./app') //endpoint 파일명

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ message: '/ pong' })
})

app.post('/signup', createUser) //실제 endpoint
app.post('/post', createpost)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('연결완료!!')
})
