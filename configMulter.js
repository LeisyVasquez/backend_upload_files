const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');

// Configurar ubicación de carpeta donde subir archivos y el nombre de los archivos
const storage = multer.diskStorage({
    //Creamos la carpeta si no existe
    destination: path.join(__dirname, 'public/uploads'), 
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
})


//Configuración del límite y cantidad de archivos y configuraciones extras
const uploadFile = multer({
    storage, 
    limits: {
        fileSize: 10000000
    }
}).single('images')

module.exports = uploadFile





