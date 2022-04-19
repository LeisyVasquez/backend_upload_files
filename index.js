const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');

// Inicializar servidor
const app = express(); 

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api', require('./routes/routes'));

// Establecer puerto
app.set('port', process.env.PORT || 4000);

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
