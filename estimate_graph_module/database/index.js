const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myPad', { useUnifiedTopology: true, useNewUrlParser: true })
const data = require('./dummyData.js');

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Ay dawg, connected to MongoDB!')
})

let myPadSchema = mongoose.Schema({
  // id: {type: Number, unique: true}, might need to add this later
  fiveYearPrice: {
    'type': 'array',
    'size': 60
  },
  oneYearPrice: {
    'type': 'array',
    'size': 12
  }
})

let Estimate = mongoose.model('Estimate', myPadSchema)
// 
let save = (data) => {
  
  var myPadSchemaData = data;

  Estimate.insertMany(myPadSchemaData, function (err, success) {
    if (err) {
      console.error(err)
    } else {
      console.log('Inserted information to Database!')
    }
  })
}

// calling function to add data to DB
// save(data);


module.exports = { save, Estimate };