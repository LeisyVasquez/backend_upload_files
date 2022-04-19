const express = require('express')
const router = express.Router()
const uploadFile = require('../configMulter')

router.get('/', (req, res) => {
  res.send('Hello word ')
})

router.post('/upload-files', (req, res) => {
  uploadFile(req, res, err => {
    if (err) {
      console.log(err)
      err.message = 'Error al cargar el archivo'
      res.send(err)
    }
    if (req.file) console.log(req.file)
    else if (req.files) console.log(req.files)
    res.send('Archivo cargado')
  })
})

module.exports = router
