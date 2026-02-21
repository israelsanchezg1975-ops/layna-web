"use client";

import { useEffect, useState } from "react";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "layna_cookie_prefs_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPrefs(JSON.parse(stored));
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const handleSave = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="w-full max-w-lg mx-4 mb-4 md:mb-0 rounded-3xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] p-6 md:p-7">
        <h2 className="text-[17px] md:text-[18px] font-semibold text-[#112033] mb-2">
          Uso de cookies
        </h2>
        <p className="text-[14px] text-[#4A5A6A] mb-4">
          Utilizamos cookies para que la web funcione correctamente, analizar
          su uso y, si lo permites, mejorar tu experiencia. Puedes aceptar solo
          las necesarias o personalizar tus preferencias.
        </p>

        {/* Opciones */}
        <div className="space-y-3 mb-5">
          {/* Necesarias */}
          <div className="flex items-start justify-between gap-3 rounded-2xl bg-[#F5F7F8] px-3 py-2.5">
            <div>
              <p className="text-[14px] font-medium text-[#112033]">
                Necesarias
              </p>
              <p className="text-[12px] text-[#6B7A8A]">
                Imprescindibles para que la web funcione. No se pueden desactivar.
              </p>
            </div>
            <div className="mt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] bg-[#D1FAE5] text-[#065F46]">
                Activas
              </span>
            </div>
          </div>

          {/* Analíticas */}
          <ToggleRow
            label="Analíticas"
            description="Nos ayudan a entender qué secciones se visitan más para mejorar el contenido."
            checked={prefs.analytics}
            onChange={(val) => setPrefs((p) => ({ ...p, analytics: val }))}
          />

          {/* Marketing / usabilidad */}
          <ToggleRow
            label="Usabilidad y marketing"
            description="Permiten recordar tus preferencias y mostrar contenidos más ajustados a ti."
            checked={prefs.marketing}
            onChange={(val) => setPrefs((p) => ({ ...p, marketing: val }))}
          />
        </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row md:justify-end gap-2">
          <button
            type="button"
            onClick={() =>
              setPrefs({
                necessary: true,
                analytics: false,
                marketing: false,
              })
            }
            className="w-full md:w-auto px-4 py-2 rounded-full text-[14px] font-medium text-[#112033] border border-[#D0D8E2] hover:bg-[#F5F7F8] transition-colors"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={() =>
              setPrefs({
                necessary: true,
                analytics: true,
                marketing: true,
              })
            }
            className="w-full md:w-auto px-4 py-2 rounded-full text-[14px] font-medium text-[#112033] border border-[#D0D8E2] hover:bg-[#F5F7F8] transition-colors"
          >
            Aceptar todas
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="w-full md:w-auto px-5 py-2 rounded-full bg-[#045C5C] hover:bg-[#034746] text-white text-[14px] font-medium transition-colors"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
}

type ToggleRowProps = {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
};

function ToggleRow({ label, description, checked, onChange }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl bg-[#F5F7F8] px-3 py-2.5">
      <div>
        <p className="text-[14px] font-medium text-[#112033]">{label}</p>
        <p className="text-[12px] text-[#6B7A8A]">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`mt-1 inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          checked ? "bg-[#045C5C]" : "bg-[#CBD5E1]"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
