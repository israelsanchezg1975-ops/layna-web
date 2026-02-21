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
      <Container1920 className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-4 py-2 md:flex-row md:justify-between md:gap-3 md:py-3">
        {/* ───────── MENÚ IZQUIERDO – SOLO ESCRITORIO ───────── */}
        <nav className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600 md:flex">
          <a href="#metodo" className="rounded-full px-3 py-1 hover:bg-slate-100">
            Método Layna
          </a>
          <a href="#servicios" className="rounded-full px-3 py-1 hover:bg-slate-100">
            Servicios
          </a>
          <a href="#biocomlux" className="rounded-full px-3 py-1 hover:bg-slate-100">
            Terapias
          </a>
        </nav>

        {/* ───────── LOGO CENTRADO ───────── */}
        <div className="flex flex-1 items-center justify-center md:justify-center">
          <a href="#top" className="flex flex-col items-center gap-1">
            <Image
              src="/logo-layna.png"
              alt="Método Layna"
              width={160}
              height={52}
              className="h-auto w-auto md:w-[200px]"
              priority
            />
            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500 md:text-[10px]">
              Medicina frecuencial integrativa
            </span>
          </a>
        </div>

        {/* ───────── MENÚ DERECHO – SOLO ESCRITORIO ───────── */}
        <nav className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600 md:flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 hover:bg-slate-100"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Pedir cita</span>
          </a>
          <a href="#contacto" className="rounded-full px-3 py-1 hover:bg-slate-100">
            Contactar
          </a>
          <a href="#faq" className="rounded-full px-3 py-1 hover:bg-slate-100">
            FAQs
          </a>
        </nav>

        {/* ───────── NAV COMPACTO – SOLO MÓVIL ───────── */}
        <div className="mt-1 flex w-full items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600 md:hidden">
          <a
            href="#metodo"
            className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200"
          >
            Método
          </a>
          <a
            href="#servicios"
            className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200"
          >
            Servicios
          </a>
          <a
            href="#faq"
            className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200"
          >
            FAQs
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-teal-900 px-3 py-1 text-white hover:bg-teal-800"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Pedir cita</span>
          </a>
        </div>
      </Container1920>
    </header>
  );
}