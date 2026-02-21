"use client";

import HeaderLayna from "../components/layout/HeaderLayna";
import FooterLayna from "../components/layout/FooterLayna";
import LegalSection from "../components/sections/LegalSection";

const whatsappHref = "https://wa.me/34646724156";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <HeaderLayna whatsappHref={whatsappHref} />
      <LegalSection initialTab="privacidad" />
      <FooterLayna />
    </main>
  );
}