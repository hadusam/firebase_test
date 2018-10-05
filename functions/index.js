const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()

app.use(basicAuth('admin', 'test'))

app.get('/auth', (req, res) => {
  res.redirect('/index.html')
})

exports.app = functions.https.onRequest(app)
