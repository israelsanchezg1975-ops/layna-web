"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container1920 from "../Container1920";

type HeaderLaynaProps = {
  whatsappHref: string;
};

export default function HeaderLayna({ whatsappHref }: HeaderLaynaProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container1920 className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 px-4 py-3 md:flex-row md:justify-between">
        {/* Menú izquierdo */}
        <nav className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600">
          <a
            href="/#metodo"
            className="rounded-full px-3 py-1 hover:bg-slate-100"
          >
            Método Layna
          </a>
          <a
            href="/#servicios"
            className="rounded-full px-3 py-1 hover:bg-slate-100"
          >
            Servicios
          </a>
          <a
            href="/#biocomlux"
            className="rounded-full px-3 py-1 hover:bg-slate-100"
          >
            Terapias
          </a>
        </nav>

        {/* Logo centrado */}
        <div className="flex flex-1 items-center justify-center md:justify-center">
          <a href="/#top" className="flex flex-col items-center gap-1">
            <Image
              src="/logo-layna.png"
              alt="Método Layna"
              width={200}
              height={64}
              className="h-auto w-auto"
              priority
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Medicina frecuencial integrativa
            </span>
          </a>
        </div>

        {/* Menú derecho */}
        <nav className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 hover:bg-slate-100"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Pedir cita</span>
          </a>
          <a
            href="/#contacto"
            className="rounded-full px-3 py-1 hover:bg-slate-100"
          >
            Contactar
          </a>
          <a
            href="/#faq"
            className="rounded-full px-3 py-1 hover:bg-slate-100"
          >
            FAQs
          </a>
        </nav>
      </Container1920>
    </header>
  );
}