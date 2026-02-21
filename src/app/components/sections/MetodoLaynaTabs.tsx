"use client";

import { BookOpen } from "lucide-react";

const pasos = [
  {
    label: "El primero",
    title: "Comprender qué está pasando",
    text: "Empezamos por poner orden: qué te ocurre, qué has probado y cómo se ha sentido tu cuerpo en todo ese proceso.",
    footnote: "Paso 1 del Método Layna",
    bg: "bg-[#e7f1ff]",
  },
  {
    label: "El segundo",
    title: "Escuchar tu biología",
    text: "Observamos cómo responde tu sistema nervioso, tu descanso, tu energía y tus síntomas para entender qué necesita tu cuerpo.",
    footnote: "Paso 2 del Método Layna",
    bg: "bg-[#e5f6ea]",
  },
  {
    label: "El tercero",
    title: "Aplicar el Método Layna",
    text: "Diseñamos un plan personalizado combinando regulación del sistema nervioso, cambios suaves en hábitos y medicina frecuencial.",
    footnote: "Paso 3 del Método Layna",
    bg: "bg-[#ffe9d3]",
  },
];

export default function MetodoLaynaTabs() {
  return (
    <div className="rounded-[32px] bg-white px-6 py-10 shadow-[0_18px_65px_rgba(15,23,42,0.09)] md:px-10 md:py-12">
      {/* Eyebrow pequeño, sin repetir la cabecera grande */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-teal-800">
        Método Layna
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pasos.map((paso) => (
          <article
            key={paso.title}
            className={`rounded-[26px] ${paso.bg} p-6 md:p-7`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              {paso.label}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
              {paso.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {paso.text}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {paso.footnote}
            </p>
          </article>
        ))}
      </div>

      {/* CTA único en verde corporativo */}
      <div className="mt-10 flex justify-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-teal-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 hover:shadow-md"
        >
          <BookOpen className="h-4 w-4" />
          <span>Pide tu cita</span>
        </a>
      </div>
    </div>
  );
}
