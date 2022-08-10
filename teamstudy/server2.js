const http = require('http')
const express = require('express')
const { putpractice } = require('/editpost') //사용자 입장에서는 편집, 수정

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
  res.json({ message: '/ pong' })
})

app.put('/update', putpractice) //컴터 입장에서는 데이터의 업데이트

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('put서버연결')
})
