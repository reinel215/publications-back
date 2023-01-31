'user strict';
import express, { Express, Request, Response } from 'express';
const app: Express = express();


import { config } from './config/config';

//LOGGER
import morgan from 'morgan';

if (config.dev) {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}


//CORS
import cors from 'cors';
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
})); 




//EXPRESS SESSION
const expressSession = require('express-session');
const sessionOptions = {
    secret: config.token,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}
app.use(expressSession(sessionOptions));



//PASSPORT SETTINGS
import passport from 'passport';
import { configPassport } from './config/passport/passport';
app.use(passport.initialize());
app.use(passport.session());
configPassport(passport); //configuramos passport


//BODY PARSER
import bodyParser from 'body-parser';
app.use(bodyParser.json()) //parse aplicattion json
app.use(bodyParser.urlencoded({ extended: false }))




//PROTECCION DE CABEZERAS
import helmet from 'helmet';
app.use(helmet());



//COMPRESION DE CONSULTAS
import compression from 'compression';
app.use(compression());




//RUTAS
import userRouter from './routes/users/users';
app.use('/api/users', userRouter(passport));
import publicationsRouter from './routes/publications/publications';
app.use('/api/publications', publicationsRouter())

app.get('/favicon.ico', (req, res) => res.status(204));

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