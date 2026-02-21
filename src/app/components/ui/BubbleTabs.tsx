"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  body: string;
};

interface BubbleTabsProps {
  tabs: Tab[];
}

export default function BubbleTabs({ tabs }: BubbleTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="mt-8 grid gap-8 md:grid-cols-[260px,minmax(0,1fr)]">
      {/* Bubbles laterales */}
      <div className="flex flex-col gap-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={[
                "flex items-center justify-between rounded-full border px-4 py-2 text-sm transition-all",
                isActive
                  ? "border-(--petrol) bg-(--mint) text-(--petrol) shadow-sm"
                  : "border-black/8 bg-white text-black/70 hover:border-(--petrol)/40 hover:bg-(--mint)/40",
              ].join(" ")}
            >
              <span>{tab.label}</span>
              <span
                className={[
                  "grid h-6 w-6 place-items-center rounded-full border text-xs",
                  isActive
                    ? "border-(--petrol) bg-white text-(--petrol)"
                    : "border-black/10 bg-white text-black/40",
                ].join(" ")}
              >
                ●
              </span>
            </button>
          );
        })}
      </div>

      {/* Contenido del tab activo */}
      <article className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm md:p-8">
        <h3 className="text-2xl md:text-3xl">{activeTab.title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-black/70 whitespace-pre-line">
          {activeTab.body}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-(--petrol) px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
          >
            Contactar sobre el Método
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-black/2"
          >
            Ver servicios relacionados
          </a>
        </div>
      </article>
    </div>
  );
}
