// imports

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes/routes')

const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('uploads'))

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`Connected to database: ${mongoose.connection.host}:${port}`))
.catch((err) => console.log(err))

app.use('/api/posts', route)

// start server
app.listen(port, ()  => {
    console.log(`Server running on port ${port}`)
})