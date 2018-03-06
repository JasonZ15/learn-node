const _ = require('lodash')
const Cat = require('./cat_model.js')

module.exports = (app) => {
  // create
  app.post('/cat', (req, res) => {
    const newCat = new Cat(req.body)
    newCat.save((err) => {
      if (err) {
        res.json({info: 'error create cat', error: err})
        return
      }
      res.json({info: 'cat created successfully'})
    })
  })

  // read
  app.get('/cat', (req, res) => {
    Cat.find((err, cats) => {
      if (err) {
        res.json({info: 'error find cat', error: err})
        return
      }
      res.json({info: 'successfully find cat', data: cats})
    })
  })
}
