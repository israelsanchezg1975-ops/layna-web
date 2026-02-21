"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container1920 from "../Container1920";

type HeaderLaynaProps = {
  whatsappHref: string;
};

export default function HeaderLayna({ whatsappHref }: HeaderLaynaProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container1920 className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 md:flex-row md:items-center md:justify-between">
        {/* ───────────────── MOBILE HEADER ───────────────── */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Botón menú (2 líneas) */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
            className="flex flex-col justify-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5"
          >
            <span className="block h-px w-5 rounded-full bg-slate-800" />
            <span className="block h-px w-4 rounded-full bg-slate-800" />
          </button>

          {/* Logo centrado */}
          <a href="#top" className="flex flex-col items-center gap-1">
            <Image
              src="/logo-layna.png"
              alt="Método Layna"
              width={150}
              height={48}
              className="h-10 w-auto"
              priority
            />
            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Medicina frecuencial integrativa
            </span>
          </a>

          {/* Icono contacto derecha */}
          <a
            href="#contacto"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
            aria-label="Ir al formulario de contacto"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        {/* ───────────────── DESKTOP HEADER ───────────────── */}
        <div className="hidden w-full items-center justify-between md:flex">
          {/* Menú izquierdo */}
          <nav className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-600">
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

          {/* Logo centrado */}
          <div className="flex flex-1 items-center justify-center">
            <a href="#top" className="flex flex-col items-center gap-1">
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
            <a href="#contacto" className="rounded-full px-3 py-1 hover:bg-slate-100">
              Contactar
            </a>
            <a href="#faq" className="rounded-full px-3 py-1 hover:bg-slate-100">
              FAQs
            </a>
          </nav>
        </div>
      </Container1920>

      {/* ───────────────── MOBILE MENU PANEL ───────────────── */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-900/20 bg-[#045C5C] text-white shadow-lg">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Menú
              </p>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Cerrar menú"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5"
              >
                <span className="text-sm font-semibold leading-none">×</span>
              </button>
            </div>

            <nav className="space-y-2 text-sm">
              <a
                href="#metodo"
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                Método Layna
              </a>
              <a
                href="#servicios"
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                Servicios
              </a>
              <a
                href="#biocomlux"
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                Terapias
              </a>
              <a
                href="#legal"
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                Información legal
              </a>
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                Contactar
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}