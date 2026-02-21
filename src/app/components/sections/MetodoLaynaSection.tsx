"use client";

import Container1920 from "../Container1920";
import MetodoLaynaTabs from "./MetodoLaynaTabs";

export default function MetodoLaynaSection() {
  return (
    <>
      {/* ───────────── MÉTODO LAYNA (INTRO) ───────────── */}
      <section
        id="metodo"
        className="border-t border-slate-200 bg-white py-16 md:py-20"
      >
        <Container1920 className="mx-auto max-w-[920px] px-4 text-center">
          {/* Icono dorado */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#f4d48a] bg-[#fffbf2] shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2b63d] text-white">
              <span className="text-lg">✶</span>
            </div>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.3rem]">
            Método LAYNA
          </h2>
          <p className="mt-5 text-lg leading-7 text-slate-700">
            Un enfoque que integra conciencia, biología y medicina frecuencial
            para acompañar procesos profundos de regulación, sanación y
            transformación personal desde dentro hacia fuera.
          </p>

          {/* Chips / beneficios */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Equilibrio energético más estable",
              "Tratamientos personalizados",
              "Resultados medibles y duraderos",
              "Sin efectos secundarios invasivos",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-900 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Container1920>
      </section>

      {/* ───────────── TRES PASOS – MÉTODO LAYNA ───────────── */}
      <section className="bg-[#F5F7F8] py-24 md:py-28" id="metodo-layna-pasos">
        <div className="mx-auto mb-12 max-w-5xl px-6 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[#0A5C5B]">
            Comprender para poder regular
          </p>
          <h2 className="mb-5 font-serif text-[32px] leading-tight text-[#112033] md:text-[40px]">
            Tres pasos para cuidar de ti sin forzar a tu cuerpo
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] text-[#5A6B7A] md:text-base">
            En lugar de abrumarte con teoría, te ofrecemos tres bloques claros
            de aprendizaje que puedes ir leyendo poco a poco. Cada uno tiene su
            propio espacio y puedes desplegar más contenido cuando lo necesites.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <MetodoLaynaTabs />
        </div>
      </section>
    </>
  );
}