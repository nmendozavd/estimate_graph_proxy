const express = require('express')
let app = express()
const morgan = require('morgan')
const { getHandler } = require('../controller/controller.js');

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/../client/dist'))


// Routes
// app.post('/')

app.get('/home', getHandler);

let port = 3003;

app.listen(port, function () {
  console.log(`Ay dawg, listening on port ${port}`)
})
