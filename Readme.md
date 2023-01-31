Ejecutar npm install

Ejecutar npm run dev



## ENV
Crear un archivo .env  con las siguientes caracteristicas

`NODE_ENV=dev`
`PORT=3000` puerto donde empezar el servidor
`DB_USER=postgres` usuario postgres
`DB_HOST=localhost` host postgres
`DB_NAME=db_name` nombre de la base de datos
`DB_PASSWORD=password` contraseña de la base de datos 
`DB_PORT=5432` puerto postgre
`TOKEN=FAL3LFM32XZK3` token secreto para generar las cookies (puedes poner cualquier cosa)
`CLIENT_URL=http://localhost:8080` url de la aplicacion front-end para activar el cors


## BD

ir a la carpeta "database" y ejecutar los create de las tablas y los inserts

## users

hay 2 usuarios que uso para probar "juanito" de tipo user y "pedro" de tipo admin

## Pruebas

`npm run test`