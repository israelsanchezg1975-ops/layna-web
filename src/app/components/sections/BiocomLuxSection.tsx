"use client";

import Image from "next/image";

interface BiocomLuxSectionProps {
  whatsappHref: string;
}

export default function BiocomLuxSection({
  whatsappHref,
}: BiocomLuxSectionProps) {
  return (
    <section
      id="biocomlux"
      className="relative overflow-hidden bg-[#030816] py-24 text-white md:py-28"
    >
      {/* Fondo con foto + degradado */}
      <div className="absolute inset-0">
        <Image
          src="/biocomlux01.jpg"
          alt="Terapia Biocom-Lux"
          fill
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#020617]/85 via-[#020617]/88 to-[#020617]/96" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[#FACC6B]">
          Terapias biofotónicas
        </p>

        <h2 className="mb-5 font-serif text-[32px] leading-tight md:text-[40px]">
          Biocom-Lux: luz frecuencial terapéutica.
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-[15px] text-slate-100/90 md:text-base">
          Biocom-Lux es una tecnología de estimulación biofotónica de baja
          intensidad que actúa a través de la vía visual. Utiliza patrones de
          luz suaves para ayudar a regular el sistema nervioso central,
          disminuir el ruido interno y facilitar estados de descanso y claridad.
        </p>

        {/* Chips centradas */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[14px]">
            Estrés crónico y sensación de “no parar nunca”.
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[14px]">
            Problemas de conciliación del sueño.
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[14px]">
            Dificultad para relajarse o desconectar.
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[14px]">
            Procesos autoinmunes con alta carga nerviosa.
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[14px]">
            Nerviosismo mantenido pese a “hacer de todo”.
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-3xl text-[15px] text-slate-100/85">
          No es invasivo ni farmacológico. No fuerza al cuerpo: le ofrece
          información ordenada para que pueda autorregularse a su ritmo.
        </p>

        {/* CTA centrado – pill verde simple, sin brillos raros */}
        <div className="flex justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#045C5C] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#034746]"
          >
            Pide tu cita
          </a>
        </div>
      </div>
    </section>
  );
}