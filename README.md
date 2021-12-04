**Contenido**

[TOC]

# Ecommerce app

Es una aplicación SPA hecha con NodeJS, MySQL, Sequelize, React y más.

# ¿Que se puede hacer?

En esta aplicación se pueden cargar productos, marcas y usuarios, en la cual se pueden editar cada uno de ellos a traves del frontend por medio de api calls al servidor por el protocolo HTTP.

# ¿Con que tecnologías esta desarrollado?

### Frontend

El frontend esta hecho con Reactjs e iniciado con [CRA](https://www.npmjs.com/package/create-react-app "CRA"), también se usaron con las siguientes librerías:

##### Dependencies

-   [Framer motion](https://www.npmjs.com/package/framer-motion "Framer motion")
-   [Styled components](https://www.npmjs.com/package/styled-components "Styled components")
-   [React loader spinner](https://www.npmjs.com/package/react-loader-spinner "React loader spinner")
-   [React notifications](https://www.npmjs.com/package/react-notifications "React notifications")

#### Backend

El backend esta hecho con NodeJS utilizando el framework de [Express](https://www.npmjs.com/package/express "Express"). También se utilizaron las siguientes librerías:

##### DevDependencies

-   [Nodemon](https://www.npmjs.com/package/nodemon "Nodemon")

##### Dependencies

-   [Axios](https://www.npmjs.com/package/axios "Axios")
-   [Bcrypt](https://www.npmjs.com/package/bcrypt "Bcrypt")
-   [Helmet](https://www.npmjs.com/package/helmet "Helmet")
-   [Cors](https://www.npmjs.com/package/cors "Cors")
-   [Dotenv](https://www.npmjs.com/package/dotenv "Dotenv")
-   [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken "Jsonwebtoken")
-   [Morgan](https://www.npmjs.com/package/morgan "Morgan")
-   [Mysql2](https://www.npmjs.com/package/mysql2 "Mysql2")
-   [Sequelize](https://www.npmjs.com/package/sequelize "Sequelize")

# Estructura del proyecto

En el root del repositorio se encuentra el servidor de nodejs, en la carpeta "client" se encuentra el cliente de react.
El servidor, sirve los archivos estaticos generados por el cliente en la carpeta "server/client/build" en cualquier dirección que no este ocupada por la api.

# Correr localmente

Para lanzar la aplicación localmente se debe tener instalado Node y poseer una base de datos, luego se deben seguir los siguientes pasos:

-   Clonar este repositorio
-   Parase en el root del repositorio recién clonado y ejecutar en la consola/terminal `npm install`
-   Después entramos a la carpeta client y ejecutamos `npm install`
-   Volvemos al root del repositorio, creamos un archivo ".env" utilizando de ejemplo ".example.env" y ponemos las credenciales de nuestra base de datos.
-   Finalmente ejecutamos `npm run dev` en el root del repositorio. Después abrimos una consola adicional, nos posicionamos en la carpeta client del repositorio y ejecutamos `npm start`
-   Al dirigirnos a la dirección `http://localhost:3000/` en el navegador veremos la aplicación funcionando.

# Cosas a tener en cuenta

-   Se pueden crear 2 tipos de cuentas, admin o no admin.
-   Solo las cuentas de admin puede hacer modificaciones en la base de datos o crear otras cuentas admin.
-   Las cuentas NO admin, no tienen funcionalidad momentaneamente, solo se pueden crearse, loguearse, desloguearse o borrarse. Pero se podrian utilizarse para hacer compras en un futuro.
-   No se puede borrar la cuenta desde la que se ha iniciado sesión.
-   Si la base de datos no tiene ninguna cuenta registrada, la primer cuenta que se cree tendra el rol de admin.
-   Si entramos como admin va a mostrarse una interfaz mas completa, de la cual se puden realizar todas las operaciones CRUD correspondientes.
-   Si borramos una marca se borraran todos los productos de la misma, y si se edita cambiara para todos los productos. (OnUpdate & OnDelete both on cascade).
-   Si entramos como admin aparecerá un boton en la parte superior de la aplicación llamado "Load random products" que llama a una api externa y trae 20 productos y se cargan con 5 marcas aleatorias.
-   Se pueden mostrar los productos en forma de columna o grilla, algunas animaciones cambian segun la orientación del dispositivo.
-   Todas las contraseñas se encriptan antes de enviarse a la base de datos.
-   La aplicación esta deployada en una instancia EC2 de AWS y la base de datos end RDS también de AWS.
-   Si se borran todas las marcas disponibles, no se podrá crear un producto hasta que no se cree otra marca.
-   Se puede acceder al diseño en Figma [haciendo click aqui.](https://www.figma.com/file/5yCre0XqPtcfdXRCIxAZzc/StoryDotsCRUD "haciendo click aqui.")
