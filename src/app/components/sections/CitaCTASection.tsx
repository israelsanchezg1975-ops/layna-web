"use client";

import { MessageCircle } from "lucide-react";
import Container1920 from "../Container1920";

interface CitaCTASectionProps {
  whatsappHref: string;
}

export default function CitaCTASection({
  whatsappHref,
}: CitaCTASectionProps) {
  return (
    <section className="border-t border-slate-200 bg-teal-800 py-10">
      <Container1920 className="mx-auto flex max-w-[1040px] flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-200">
            ¿Necesitas hablarlo con calma?
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Hablemos por WhatsApp y estudiamos tu caso.
          </h3>
          <p className="mt-3 text-sm text-teal-50 md:text-base">
            Cuéntanos qué te preocupa y te responderemos con calma para ver si
            el método encaja contigo y en qué parte podemos ayudarte.
          </p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-900 shadow-md hover:bg-teal-50"
        >
          <MessageCircle className="h-5 w-5" />
          Escribir por WhatsApp
        </a>
      </Container1920>
    </section>
  );
}