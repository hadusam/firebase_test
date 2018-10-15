const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()
const secret = '/nYqK6icg0gs7iy8O9Qv25eDxLVP9izaYzQjUSGEjCsuqW4mxtfxU9VmSPnJJnJXD'

app.use(basicAuth('admin', 'test'))

app.get('/auth', (req, res) => {
  res.redirect(secret + '/index.html')
})

app.get('*', (req, res) => {
  res.redirect(secret + req.originalUrl)
})

exports.app = functions.https.onRequest(app)
