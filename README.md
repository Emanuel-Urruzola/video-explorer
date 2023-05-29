# Video explorer
Para este proyecto se usaron las tecnologías:
* TypeScript
* Tauri
* React

Este repositorio está pensado para uso personal y, por lo tanto, no esta configurado para un uso mas general.
Este es un programa que muestra los videos en una carpeta, en un tamaño más grande para que se puedan ver las miniaturas con mayor facilidad. Al hacer click en cualquiera de ellos los ejecuta con vlc.

![Screenshot](/readme-image/Screenshot-_880_.webp)

### Configuraciones ya implementadas:
Tamaño: Modifica el tamaño de la imagen desde 40 hasta 80 vh. Por defecto: `50`
Color principal: Modifica el color de fondo tras los videos. Por defecto `#eeeeee`
Color configuración: Modifica el color de fondo del aside. Por defecto `#fa8072`

### TODO's
* Almacenar las modificaciones para que no se pierdan al reiniciar.
* Implementar la función de búsqueda para filtrar por nombre.
* Cambiar formato de las imágenes para reducir su tamaño.

### Revisar:
El método `readDir` de `@tauri-apps/api/fs` , lee los archivos en un carpeta y por cada uno devuelve un objeto del tipo:
```javascript
{
	name: "Nombre-del-archivo.extension",
	path: "Ruta-absoluta-del-archivo/Nombre-del-archivo.extension"
}
```
Tendría que generar otro json a partir de este para las siguientes funciones:
* Implementar los tags, para que se pueda filtrar por tipos de video.

**Debido a que solo devuelve esos datos, no es posible filtrar por fecha, por ejemplo.**


### Configuraciones si querés usarlo:
Como dije previamente, este programa fue pensado para uso personal. Pero si te sirve, o querés probarlo, tendrías que hacer las siguientes modificaciones:

#### PATH
Configurar tu PATH para agregar VLC, si no está hecho ya. La ruta por defecto en windows de VLC es `C:\Program Files\VideoLAN\VLC`

#### Thumbnails
Las miniaturas no las recoge el método `readDir` y parecen ser propias de cada programa de video, por lo tanto las capturas las hice manualmente, con capturas de pantalla, y las almacene dentro de public/thumbnails con la extensión png.

En caso de usar otro formato debe modificarse en src/components/VideoItem.tsx :
```javascript
<img src={

        process.env.TAURI_DEV

          ? `public/thumbnails/${name.slice(0, - 3)}png`

          : `/thumbnails/${name.slice(0, - 3)}png`}

        alt="video de entrenamiento" />
```
Cambia `png` por el formato en el que guardes tus imagenes, por ejemplo: `webp`, `jpg`, etc.

#### Videos
Los videos los obtengo de una carpeta de mi escritorio para usar una de las rutas permitidas por tauri. La carpeta en cuestión se llama Bailes y entrenamiento.

En mi caso particular tengo que mi escritorio no muestre iconos, por lo que no fue problema, pero de querer otras opciones tauri las tiene, tendrias que modificar está parte en src/Data/videos.ts
```javascript
import { desktopDir } from '@tauri-apps/api/path'
```
por otra de las [permitidas](https://tauri.app/v1/api/js/fs#security)

Y luego está línea
```javascript
const desktopPath = await desktopDir()
```
Para que quede configurado desktopPath

También si querés modificar el nombre de la carpeta, seria justo debajo de la línea anterior:
```javascript
const folderPath = `${desktopPath}Bailes y entrenamiento\\`
```

#### TIP
>No olvides que si tenes la carpeta en otro disco pero quedes acceder a ella desde este u otro programa podes usar los enlaces simbólicos de tu sistema para poder acceder a ellos como si estuvieran en ese disco.
   En windows se hace con el comando mklink:
   
```mathematica
mklink /D C:\Users\[tu-nombre-de-usuario]\Desktop [ruta-de-la-carpeta]
```

### Build
Para hacer un build del proyecto, tenes que ejecutar el comando
```node
pnpm tauri dev
```