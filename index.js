'use strict'

const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.post('/', upload.single('photo'), (req, res, next) => {
  if (req.file) res.sendStatus(200)
})

app.listen('10000', () => console.log('started'))