const { Estimate } = require('../database/index.js');

// handler to GET data
getHandler = (req, res) => {
  Estimate.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(404);
      res.send(err);
    } else {
      // console.log(data);
      res.status(200);
      res.send(data);
    }
  })
};

module.exports = { getHandler };