const express = require('express')

const router = express.Router()

const app = express()
// This takes the incoming req and res data and maps it to the
// the api provided by express, so that we can use the exact same
// syntax as express provides it, so that json and status works correctly
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/track-data', (req, res) => {
  // here you can run any code you want
  // connect to the database for example import mongoose and store data
  // you can even implement your own api with all kinds of backend stuff
  // including your own authentication
  console.log('stored data', req.body.data)
  res.status(200).json({ message: 'Success' })
})

module.exports = {
  path: '/api',
  handler: router,
}
