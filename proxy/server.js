const express = require('express')
const morgan = require('morgan')
const path = require('path')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public/lib/')))

// Caculator Module GET for data
app.get('/homes', (req, res) => {
  axios.get('http://localhost:3001/homes')
    .then((response) => {
      res.send(response.data)
    })
    .catch((error => {
      console.log(error)
    }))
})

app.get('/bank', (req, res) => {
  axios.get('http://localhost:3001/bank')
    .then((response) => {
      res.send(response.data)
    })
    .catch((error => {
      console.log(error)
    }))
})

// Image Carousel Module GET for images by ID

app.get('/image', (req, res) => {
  axios.get(`http://localhost:3002${req.url}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error => {
      console.log(error);
    }));
});

// Estimate Graph GET data request
app.get('/home', (req, res) => {
  axios.get(`http://localhost:3003/home`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error => {
      console.log(error);
    }));
});

app.listen(port, () => {
  console.log(`Proxy Server Running On Port: ${port}`)
})
