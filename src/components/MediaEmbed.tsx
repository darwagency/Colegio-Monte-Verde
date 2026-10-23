import { isVideoUrl, toEmbedUrl, getVideoThumbnailUrl } from "@/lib/mediaUtils";
import { Newspaper, Play } from "lucide-react";

interface MediaEmbedProps {
    /** Ruta local de la imagen o URL de video. */
    src: string;
    /** URL opcional del video asociado a una miniatura local. */
    videoUrl?: string;
    /** Texto alternativo para imágenes. */
    alt: string;
    /** Variante de presentación. */
    variant: "card" | "detail";
    /** Prioridad de carga. */
    loading?: "lazy" | "eager";
    /** Clases extra para el contenedor. */
    className?: string;
}

/** Renderiza una imagen local o el reproductor de un video. */
export default function MediaEmbed({
    src,
    videoUrl,
    alt,
    variant,
    loading = "lazy",
    className = "",
}: MediaEmbedProps) {
    const videoSource = videoUrl || (isVideoUrl(src) ? src : "");

    if (!src && !videoSource) {
        return (
            <div
                className={`${variant === "card" ? "aspect-[16/10]" : "aspect-video"} bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${className}`}
            >
                <Newspaper className="w-12 h-12 text-gray-200" />
            </div>
        );
    }

    if (videoSource) {
        if (variant === "card") {
            const thumbnailUrl = src && !isVideoUrl(src) ? src : getVideoThumbnailUrl(videoSource);

            return (
                <div className={`relative aspect-[16/10] overflow-hidden bg-gray-900 ${className}`}>
                    {thumbnailUrl && (
                        <img
                            src={thumbnailUrl}
                            alt={alt}
                            loading={loading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                            <Play className="w-6 h-6 text-gray-800 ml-0.5" fill="currentColor" />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className={`mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-lg ${className}`}>
                <div className="relative aspect-video bg-black">
                    <iframe
                        src={toEmbedUrl(videoSource)}
                        title={alt}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading={loading}
                    />
                </div>
            </div>
        );
    }

    if (variant === "card") {
        return (
            <div className={`relative aspect-[16/10] overflow-hidden bg-gray-100 ${className}`}>
                <img
                    src={src}
                    alt={alt}
                    loading={loading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        );
    }

    return (
        <div className={`mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-lg ${className}`}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                className="w-full h-auto max-h-[500px] object-cover"
            />
        </div>
    );
}
