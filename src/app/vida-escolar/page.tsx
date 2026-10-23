"use client";

import { useState } from "react";
import {
    Activity,
    Utensils,
    Shirt,
    Trophy,
    Crown,
    Guitar,
    Dribbble,
    ImageIcon,
    Download,
    BookOpen,
    Brain,
} from "lucide-react";
import WorkshopModal from "@/components/WorkshopModal";

const workshops = [
    {
        title: "Fútbol",
        sessions: [
            "Martes · 5° a 8° básico",
            "Miércoles · 1° a 4° básico",
        ],
        audience: "Estudiantes de 1° a 8° básico",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "trophy",
        Icon: Trophy,
    },
    {
        title: "Básquetbol",
        sessions: [
            "Martes · 5° y 6° básico",
            "Viernes · 1° y 2° básico",
            "Viernes · Grupo 2: 3° y 4° básico",
        ],
        audience: "Estudiantes de 1° a 6° básico",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "dribbble",
        Icon: Dribbble,
    },
    {
        title: "Ajedrez",
        sessions: ["Viernes · 1° a 8° básico"],
        audience: "Estudiantes de 1° a 8° básico",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "crown",
        Icon: Crown,
    },
    {
        title: "Inglés",
        sessions: [
            "Lunes · 6° a 8° básico",
            "Miércoles · 3° a 5° básico",
        ],
        audience: "Estudiantes de 3° a 8° básico",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "book-open",
        Icon: BookOpen,
    },
    {
        title: "Taller de Altas Capacidades",
        sessions: ["Martes y miércoles"],
        audience: "Estudiantes identificados",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "brain",
        Icon: Brain,
    },
    {
        title: "Instrumental",
        sessions: ["Jueves · 1° a 8° básico"],
        audience: "Estudiantes de 1° a 8° básico",
        bgColor: "bg-institutional",
        textColor: "text-white",
        iconName: "guitar",
        Icon: Guitar,
    },
];

export default function VidaEscolarPage() {
    const [modal, setModal] = useState<(typeof workshops)[0] | null>(null);

    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center theme-text-accent">
                Vida Escolar
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Toda la información práctica para el día a día de nuestros
                estudiantes.
            </p>

            {/* Talleres */}
            <div className="mb-16">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                    <Activity className="text-institutional" /> Talleres
                    Extraescolares
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workshops.map((w) => (
                        <div
                            key={w.title}
                            onClick={() => setModal(w)}
                            className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition cursor-pointer group"
                        >
                            <div
                                className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${w.bgColor} ${w.textColor} group-hover:scale-110 transition-transform`}
                            >
                                <w.Icon className="w-7 h-7" />
                            </div>
                            <h4 className="font-bold text-gray-800 group-hover:text-[var(--accent)]">
                                {w.title}
                            </h4>
                            <ul className="text-xs text-gray-500 mt-2 space-y-1">
                                {w.sessions.map((session) => (
                                    <li key={session}>{session}</li>
                                ))}
                            </ul>
                            <p className="text-[11px] text-gray-400 mt-2">
                                {w.audience}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Casino y Uniforme */}
            <div className="grid md:grid-cols-2 gap-12">
                {/* Menú de Casino */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                        <Utensils className="text-institutional" /> Menú de Casino
                    </h3>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                        <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                            <span className="flex items-center gap-2">
                                <ImageIcon className="w-5 h-5" /> Minuta
                                Mensual (Imagen)
                            </span>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">
                            Menú Marzo 2026
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Concesionaria &quot;NutriChiloé&quot;
                        </p>
                        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 flex items-center justify-center w-full gap-2">
                            <Download className="w-4 h-4" /> Descargar PDF
                        </button>
                    </div>
                </div>

                {/* Buzo y polera institucional colegio Monteverde */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                        <Shirt className="text-institutional" /> Buzo y polera institucional colegio Monteverde
                    </h3>
                    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0 font-bold">
                                    L
                                </div>
                                <div>
                                    <strong>Lunes a Jueves:</strong> Polera
                                    piqué blanca institucional, pantalón gris /
                                    falda escocesa, polerón institucional o
                                    parka azul marino.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0 font-bold">
                                    V
                                </div>
                                <div>
                                    <strong>
                                        Viernes y Educación Física:
                                    </strong>{" "}
                                    Buzo oficial del colegio completo y
                                    zapatillas deportivas.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Workshop Modal */}
            {modal && (
                <WorkshopModal
                    isOpen={!!modal}
                    onClose={() => setModal(null)}
                    title={modal.title}
                    sessions={modal.sessions}
                    audience={modal.audience}
                    bgColor={modal.bgColor}
                    textColor={modal.textColor}
                    iconName={modal.iconName}
                />
            )}
        </div>
    );
}
