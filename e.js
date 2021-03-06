const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const APIKey = "8bebd070f80dace3c5498124f468dc36"

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})