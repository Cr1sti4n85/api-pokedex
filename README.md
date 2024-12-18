<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar el comando siguiente:
   `yarn install `

3. Tener nest CLI instalado
   ` npm i -g @nestjs/cli`

4. levantar la base de datos

   ` docker-compose up -d`

5. Clonar el archivo **.env.template** y renombrarlo a **.env**

6. Llenar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicación con el comando
   `yarn start:dev`

8. Reconstruir base de datos con la semilla

`http://localhost:3000/api/v2/seed`

## Stack usado

- Nestjs
- MongoDB

# Production build Docker

1. Crear el archivo **.env.prod**
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen:

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
