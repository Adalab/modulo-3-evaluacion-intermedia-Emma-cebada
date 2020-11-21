# Proyecto: Gotta catch 'em all!!

Web propuesta por Adalab para llevar a cabo la evaluación intermedia del módulo 3 en el cual se aprende React. El proyecto consiste en coger de un .json información determinada para ser capaz de pintar un listado de Pokemons en la pantalla a modo de tarjetas.
La información a sacar en cada una de las tarjetas propuestas por Adalab es: la imagen del pokemon, su nombre y el tipo al que pertenece.

## Instalación necesaria para realizar el proyecto.

Para realizar este proyecto ha sido necesario crear un nuevo repositorio en GitHub desde GitHub Classroom usando un enlace que nos dan, con el que una vez clonado en nuestro ordenador podemos comenzar a trabajar en el proyecto.

Es necesario instalar React:
$ npm install create-react-app
$ npm install node-sass // Esto si se va a usar scss
Y en el caso de usar las PropTypes también se necesitará ejercutar en consola:
npm install --save prop-types

### Scripts disponibles.

Para ir viendo el avance de tu proyecto, puedes ejecutar en consola:

### `npm start`

Esto abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

La página se irá actualizando con los cambios que vayas realizando y también te permitirá ver los errores a través de la consola.

### `npm run build`

Esto sirve para crear una versión de desarrollo que es la que va a ser subida.
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Y ya tienes tu aplicación lista para implementarse!

#### Estructura de la aplicación.

La aplicación está estructurada en 3 componentes con los nombres: App, PokeList y Pokemon.
También tiene en la carpeta data los datos guardados a recoger del .json con el nombre de dataPoke.
Y una última carpeta que recibe el nombre de stylesheet donde se han guardado todos los archivos correspondientes a los estilos de la aplicación.
