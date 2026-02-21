"use client";

import Image from "next/image";
import Container1920 from "../Container1920";

export default function FooterLayna() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 pt-10 text-slate-700">
      <Container1920 className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pb-6 md:flex-row md:justify-between">
        <div className="flex-1">
          <Image
            src="/logo-layna.png"
            alt="Método Layna"
            width={170}
            height={56}
            className="h-auto w-auto"
          />
          <p className="mt-3 text-sm">
            Medicina frecuencial integrativa, coherencia corazón–mente y terapias
            personalizadas para transformar tu vida desde dentro.
          </p>
        </div>

        <div className="flex flex-1 gap-12 text-sm">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegación
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#metodo" className="hover:text-slate-900">
                  Método
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-slate-900">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#biocomlux" className="hover:text-slate-900">
                  Terapias
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Legal
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/aviso-legal" className="hover:text-slate-900">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-slate-900">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-slate-900">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container1920>

      <div className="border-t border-slate-200 bg-[#d8a73b] py-3 text-center text-[11px] font-medium text-slate-900">
        © {new Date().getFullYear()} Método LAYNA. Todos los derechos reservados.
      </div>
    </footer>
  );
}