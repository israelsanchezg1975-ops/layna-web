"use client";

import { MessageCircle } from "lucide-react";
import Container1920 from "../Container1920";

interface CitaCTASectionProps {
  whatsappHref: string;
}

export default function CitaCTASection({ whatsappHref }: CitaCTASectionProps) {
  return (
    <section className="bg-[#045C5C] py-12 md:py-14 text-white">
      <Container1920 className="mx-auto flex max-w-300 flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FACC6B]">
            ¿Necesitas hablarlo con calma?
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug md:text-[1.9rem]">
            Escríbenos por WhatsApp y vemos como el Método LAYNA encaja contigo.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-50/90 md:text-[15px]">
            Cuéntanos qué te preocupa. Te responderemos personalmente para orientarte sobre el tipo de ayuda que
            puede favorecerte más.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#045C5C] shadow-sm transition hover:bg-slate-50 md:w-auto"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#045C5C]/30 bg-white/80">
              <MessageCircle className="h-4 w-4" />
            </span>
            <span>Escribir por WhatsApp</span>
          </a>
        </div>
      </Container1920>
    </section>
  );
}