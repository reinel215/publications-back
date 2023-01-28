/* 

este archivo corre el servidor con un solo hilo en modo developer
y en modo produccion utiliza todos los nucleos disponibles

*/

import express, { Express, Request, Response } from 'express';
import os from 'os';
import cluster from 'cluster';
import { config } from '../config/config';

const numCPUs = os.cpus().length


export const runServer = (app : Express) => {

    if(process.env.NODE_ENV == 'test') return;


    if (config.dev) {

        //Desplegar Servidor
        return app.listen(config.port, () => {

            console.log(`server running on port: http://localhost:${config.port}`);

        });

    }else {

        //si es el proceso padre hacemos que haga hijos por cada cpu
        if(cluster.isPrimary){

            console.log(`Master ${process.pid} is running`);

            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();              
            }


            cluster.on('exit', (worker : any, code : string , signal: string) =>{
                console.log(`worker ${worker.process.pid} died`);
            } );

        }else{

            //cuando sean procesos hijos los ponemos a esuchar al puerto
            app.listen(config.port, () => {

                console.log(`proccess ${process.pid} is running a server on port: http://localhost:${config.port}`);
    
            });


        }


    }

}

