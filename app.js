const express = require('express'),
app = express()

require('dotenv').config()

app.use('/api/', require("./routes/currencyApi"))

const PORT = process.env.PORT || 3003

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})