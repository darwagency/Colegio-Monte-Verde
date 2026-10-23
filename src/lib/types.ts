/** Contenido de una noticia publicada en el sitio. */
export interface Noticia {
    slug: string;
    titulo: string;
    /** Fecha legible, por ejemplo 04/03/2026 o 01-09-2026. */
    fecha: string;
    contenido: string;
    /** Rutas locales dentro de public/noticias/. */
    imagenInicio: string;
    imagenFinal: string;
    botonLink: string;
    botonTexto: string;
    /** URL del video cuando la noticia incluye un reproductor. */
    videoUrl?: string;
}

export interface HeroConfig {
    image: string;
    filterColor: string;
    filterActive: boolean;
}
