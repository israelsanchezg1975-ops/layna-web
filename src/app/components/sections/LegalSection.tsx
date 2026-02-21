"use client";

import { useState } from "react";
import Container1920 from "../Container1920";

type LegalPageKey = "aviso" | "privacidad" | "cookies";

const TABS: { key: LegalPageKey; label: string }[] = [
  { key: "aviso", label: "Aviso legal" },
  { key: "privacidad", label: "Política de privacidad" },
  { key: "cookies", label: "Política de cookies" },
];

interface LegalSectionProps {
  initialTab?: LegalPageKey;
}

export default function LegalSection({ initialTab = "aviso" }: LegalSectionProps) {
  const [active, setActive] = useState<LegalPageKey>(initialTab);

  return (
    <section
      id="legal"
      className="border-t border-slate-200 bg-white py-16 md:py-20"
    >
      <Container1920 className="mx-auto max-w-300 px-4">
        {/* Cabecera de la sección */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-800">
            Información legal
          </p>
          <h2 className="mt-3 text-[1.9rem] font-semibold text-slate-900 md:text-[2.2rem]">
            Aviso legal, privacidad y cookies
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base max-w-2xl mx-auto">
            Aquí tienes toda la información legal de Método Layna agrupada en un
            mismo espacio. Puedes cambiar entre documentos desde el menú de la
            izquierda.
          </p>
        </div>

        {/* Layout: menú izquierdo + contenido derecho */}
        <div className="grid gap-6 md:grid-cols-[230px_minmax(0,1fr)]">
          {/* Menú lateral */}
          <aside className="flex flex-row gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-2 md:flex-col md:gap-3 md:p-4">
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition md:w-full md:text-left ${
                    isActive
                      ? "bg-teal-900 text-white shadow-sm"
                      : "bg-white text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </aside>

          {/* Contenido */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 md:p-6 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] text-sm md:text-base text-slate-800 leading-7">
            {active === "aviso" && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Aviso legal
                </h3>
                {/* 🔽 Sustituye por el contenido real del aviso legal */}
                <p className="mb-3 text-sm text-slate-600">
                  (Sustituye este texto por el aviso legal que ya tienes
                  redactado. Solo copia el contenido, sin el header/footer.)
                </p>
              </div>
            )}

            {active === "privacidad" && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Política de privacidad
                </h3>
                {/* 🔽 Sustituye por la política de privacidad real */}
                <p className="mb-3 text-sm text-slate-600">
                  (Pega aquí tu política de privacidad: responsable, finalidad
                  del tratamiento, legitimación, plazos de conservación, etc.)
                </p>
              </div>
            )}

            {active === "cookies" && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Política de cookies
                </h3>
                {/* 🔽 Sustituye por el texto real de cookies */}
                <p className="mb-3 text-sm text-slate-600">
                  (Aquí va tu texto de cookies: tipos de cookies, plazos,
                  gestión desde el navegador, etc.)
                </p>
              </div>
            )}
          </div>
        </div>
      </Container1920>
    </section>
  );
}