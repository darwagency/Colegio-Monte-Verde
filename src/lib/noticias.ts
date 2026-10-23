import { heroConfig, noticias } from "@/data/noticias";
import type { HeroConfig, Noticia } from "@/lib/types";

function getTimestamp(fecha: string): number | null {
    const match = fecha.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
    if (!match) return null;

    const [, dayText, monthText, yearText] = match;
    const day = Number(dayText);
    const month = Number(monthText);
    const year = Number(yearText);
    const date = new Date(Date.UTC(year, month - 1, day));

    if (
        date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day
    ) {
        return null;
    }

    return date.getTime();
}

/** Devuelve las noticias más nuevas primero; las que no tienen fecha quedan al final. */
export function getNoticias(): Noticia[] {
    return noticias
        .map((noticia, index) => ({ noticia, index, timestamp: getTimestamp(noticia.fecha) }))
        .sort((a, b) => {
            if (a.timestamp === null && b.timestamp === null) return a.index - b.index;
            if (a.timestamp === null) return 1;
            if (b.timestamp === null) return -1;
            return b.timestamp - a.timestamp || a.index - b.index;
        })
        .map(({ noticia }) => noticia);
}

export function getNoticiaBySlug(slug: string): Noticia | undefined {
    return noticias.find((noticia) => noticia.slug === slug);
}

export function getHeroConfig(): HeroConfig {
    return { ...heroConfig };
}
