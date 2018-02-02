
const express = require('express')

const router = express.Router()

// this will be the route that handles all true get, post, put and delete request

router.use('/todo', require('./todo'))

// test route Todoapi/heartbeat sends a json to make sure my server is serving
router.get('/heartbeat', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' })
})

// sets server for additional routes in this case /todo
module.exports = router
