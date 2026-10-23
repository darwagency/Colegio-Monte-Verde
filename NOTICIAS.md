# Mantener las noticias

El catálogo está en `src/data/noticias.ts`. Agrega cada noticia como un objeto dentro del arreglo `noticias`. El sitio ordena las noticias por fecha descendente; las que no tienen fecha aparecen al final.

Cada entrada usa estos campos:

- `slug`: identificador único para la URL, en minúsculas y separado por guiones.
- `titulo`, `fecha` y `contenido`: texto que se publica en las tarjetas y el artículo.
- `imagenInicio` y `imagenFinal`: rutas de imágenes dentro de `public/noticias`, escritas como `/noticias/nombre.webp`.
- `botonLink` y `botonTexto`: campos opcionales para un botón al final del artículo.
- `videoUrl`: URL opcional de Vimeo o YouTube. Si la noticia incluye un video, `imagenInicio` también debe apuntar a una miniatura local para las tarjetas.

Antes de agregar imágenes, conviértelas a WebP y optimízalas. Las imágenes de noticias usan un máximo de 1600 × 1600 píxeles; la portada puede usar hasta 1920 × 1920. Mantén una calidad visual cercana a 80 y evita ampliar imágenes pequeñas. Guarda solo la versión optimizada en `public/noticias`.

La configuración de la portada está al final del mismo archivo, en `heroConfig`. Al cambiarla, agrega también la imagen optimizada a `public/noticias` y actualiza su ruta local. Como el contenido vive en el código, los cambios aparecen al generar y desplegar una nueva versión del sitio.

