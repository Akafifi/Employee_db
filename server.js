require('./db/connection')
const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => console.log(`Employee tracker listening at http://localhost:${PORT}`))