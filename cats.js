const _ = require('lodash')

module.exports = (app) => {
  const _cats = []

  // read
  app.get('/cat', (req, res) => {
    res.send(_cats)
  })
}
