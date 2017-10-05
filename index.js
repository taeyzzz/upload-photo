'use strict'

const express = require('express')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
const cors =  require('cors')

const app = express()
app.use(cors())


app.post('/', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  if (req.file) res.status(200).json({
    message : 'image uploaded'
  })
})

app.use((error, req, res, next) => {
  res.status(500).json(error)
})

app.listen('10000', () => console.log('started'))
