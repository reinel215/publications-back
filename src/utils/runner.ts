/* 

este archivo corre el servidor con un solo hilo en modo developer
y en modo produccion utiliza todos los nucleos disponibles

*/

import express, { Express, Request, Response } from 'express';
import os from 'os';
import cluster from 'cluster';
import { config } from '../config/config';

const numCPUs = os.cpus().length

//run the server
export const runServer = (app : Express) => {

    if(process.env.NODE_ENV == 'test') return;


    if (config.dev) {

        //Desplegar Servidor
        return app.listen(config.port, () => {

            console.log(`server running on port: http://localhost:${config.port}`);

        });

    }

}

