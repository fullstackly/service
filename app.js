const morgan = require('morgan')
const middleware = require('./utils/middleware')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

let userCounter = 0

app.use(morgan('tiny'))
app.use(cookieParser())

app.get('/', function (req, res) {
    const visited = req.cookies.visited

    if (visited === undefined) {
        userCounter++
        res.cookie('visited', 'true', { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
    }

    res.send(`user_hits: ${userCounter}`)
})

app.use(middleware.redirectUnmatched)
app.use(middleware.errorHandler)

module.exports = app