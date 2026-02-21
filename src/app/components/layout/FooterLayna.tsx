"use client";

import Container1920 from "../Container1920";

export default function FooterLayna() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[#0b2830] text-slate-100">
      <Container1920 className="mx-auto max-w-300 px-4 py-8">
        <div className="grid gap-8 text-sm md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Bloque marca */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-200">
              MÉTODO LAYNA
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-slate-200">
              Medicina frecuencial integrativa, coherencia corazón–mente y
              terapias personalizadas para transformar tu vida desde dentro.
            </p>
          </div>

          {/* Navegación + legal + redes */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Navegación */}
            <div>
              <p className="inline-flex rounded-full bg-[#045C5C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                Navegación
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <a href="#metodo" className="hover:text-white">
                    Método
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#biocomlux" className="hover:text-white">
                    Terapias
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="inline-flex rounded-full bg-[#045C5C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                Legal
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <a href="#legal" className="hover:text-white">
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a href="#legal" className="hover:text-white">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#legal" className="hover:text-white">
                    Política de cookies
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes sociales + contactar */}
            <div>
              <p className="inline-flex rounded-full bg-[#045C5C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                Redes y contacto
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white">
                    Contactar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container1920>

      <div className="border-t border-slate-700 bg-[#d8a73b] py-2 text-center text-[11px] font-medium text-slate-900">
        © {year} Método LAYNA. Todos los derechos reservados.
      </div>
    </footer>
  );
}