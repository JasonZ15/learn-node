const _ = require('lodash')

module.exports = (app) => {
  const _cats = []

  // create
  app.post('/cat', (req, res) => {
    _cats.push(req.body)
    res.json({info: 'cat created successfully'})
  })

  // read
  app.get('/cat', (req, res) => {
    res.send(_cats)
  })
}
