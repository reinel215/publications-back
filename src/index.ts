'user strict';
import express, { Express, Request, Response } from 'express';
const app : Express = express();


import { config } from './config/config';

//LOGGER
import morgan from 'morgan';

if (config.dev) {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}




//BODY PARSER
import bodyParser from 'body-parser';
app.use(bodyParser.json()) //parse aplicattion json
app.use(bodyParser.urlencoded({ extended: false }))



//CORS
import cors from 'cors';
app.use(cors()); //activa el cors para todas las rutas


//PROTECCION DE CABEZERAS
import helmet from 'helmet';
app.use(helmet());



//COMPRESION DE CONSULTAS
import compression from 'compression';
app.use(compression());




//RUTAS
import userRouter from './routes/users/users';
app.use('/api/users', userRouter);


//Errores
//page not found
import { notFound } from './middlewares/errors/notFound';
app.use(notFound);
//log errores
import { logErrors } from './middlewares/errors/logErrors';
app.use(logErrors);
//error handler 
import { errorHandler } from './middlewares/errors/errorHandler';
app.use(errorHandler);

//Desplegar Servidor
import { runServer } from './utils/runner';
const server = runServer(app);


module.exports = { app, server };