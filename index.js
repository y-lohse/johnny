const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1><marquee direction=right>Hello from Express path '/' on Now 2.0!</marquee></h1>
    `)
})

module.exports = app
