
const path = require('path')

const express = require('express')
const app = express()
const port = 3000

const config = require('./config.cjs')

app.use(express.static('dist'))
app.use('/blog', express.static('dist'))
app.use('/doc', express.static(path.join(__dirname, "../blog-git/doc/")))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/blog', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
