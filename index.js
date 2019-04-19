const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())

app.post('/', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.json({
    text: 'yo'
  })
})

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.status(200).send(`
      <h1>Dep.</h1>
  `)
})

module.exports = app
