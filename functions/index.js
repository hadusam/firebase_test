const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()

app.use(basicAuth('admin', 'test'))

app.get('/auth', (req, res) => {
  res.redirect('/nYqK6icg0gs7iy8O9Qv25eDxLVP9izaYzQjUSGEjCsuqW4mxtfxU9VmSPnJJnJXD/index.html')
})

exports.app = functions.https.onRequest(app)
