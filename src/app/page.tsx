"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import Container1920 from "./components/Container1920";
import HeaderLayna from "./components/layout/HeaderLayna";
import FooterLayna from "./components/layout/FooterLayna";
import MetodoLaynaSection from "./components/sections/MetodoLaynaSection";
import BiocomLuxSection from "./components/sections/BiocomLuxSection";
import CitaCTASection from "./components/sections/CitaCTASection";

// ───────────────────────────── CONSTANTES ─────────────────────────────

const HERO_SLIDES = [
  {
    id: 0,
    eyebrow: "Método LAYNA",
    title: "Un enfoque sereno, profesional y claro para tu bienestar.",
    text: "Acompañamos tu proceso con medicina frecuencial, coherencia corazón–mente, grounding y trabajo con el subconsciente, siempre desde la calma y la claridad.",
    image: "/slide001.jpg",
    overlayClass: "bg-white/82",
    textClass: "text-slate-900",
  },
  {
    id: 1,
    eyebrow: "Terapias biofotónicas",
    title: "Biocom-Lux: luz frecuencial terapéutica.",
    text: "Tecnología de estimulación biofotónica de baja intensidad a través de la vía visual. Utiliza patrones de luz suaves para ayudar a regular el sistema nervioso y facilitar estados de descanso profundo.",
    image: "/biocomlux01.jpg",
    overlayClass: "bg-[rgba(0,40,60,0.82)]",
    textClass: "text-white",
  },
  {
    id: 2,
    eyebrow: "Aprendizaje y acompañamiento",
    title: "Comprender tu cuerpo también es parte de la terapia.",
    text: "Te explicamos con un lenguaje claro cómo funcionan la medicina frecuencial, la regulación del sistema nervioso y la biofísica que hay detrás del Método LAYNA.",
    image: "/slide002.jpg",
    overlayClass: "bg-white/85",
    textClass: "text-slate-900",
  },
];

const serviciosCards = [
  {
    tag: "Sesiones 1:1",
    title: "Acompañamiento integrativo",
    text: "Miramos tu caso completo: síntomas, contexto vital, estrés, descanso, emociones y patrones que se repiten. Diseñamos un plan realista y humano.",
  },
  {
    tag: "Frecuencias y regulación",
    title: "Medicina frecuencial",
    text: "Uso de tecnologías de frecuencia para acompañar procesos de dolor crónico, inflamación, fatiga y desregulación, siempre como complemento a tu abordaje médico.",
  },
  {
    tag: "Cambio profundo",
    title: "Trabajo con subconsciente",
    text: "Método SOMA y otras herramientas para transformar programas internos que sostienen bloqueos emocionales y situaciones que se repiten una y otra vez.",
  },
  {
    tag: "Recursos para el día a día",
    title: "Grounding y coherencia",
    text: "Prácticas sencillas para que tu cuerpo vuelva a sentirse aquí y ahora, con menos ruido mental y una sensación de mayor estabilidad interna.",
  },
  {
    tag: "Complemento regulador",
    title: "Apoyo en procesos médicos",
    text: "Acompañamiento emocional y regulador para personas que están atravesando diagnósticos, pruebas o tratamientos médicos complejos.",
  },
  {
    tag: "A distancia",
    title: "Proceso online",
    text: "Si no puedes venir en persona, trabajamos online con las partes del método que se adaptan bien a este formato: acompañamiento, SOMA, pautas de coherencia, etc.",
  },
];

const faqItems = [
  {
    question: "¿Es compatible con otros tratamientos médicos?",
    answer:
      "Sí. El trabajo se realiza siempre como complemento regulador y nunca sustituye a los tratamientos médicos pautados. Nos coordinamos con tu equipo médico y respetamos sus indicaciones.",
  },
  {
    question: "¿Cuántas sesiones suelen ser necesarias?",
    answer:
      "Depende del caso y de la antigüedad del proceso. En situaciones puntuales pueden bastar pocas sesiones; en procesos crónicos solemos plantear un acompañamiento más continuado, que consensuamos contigo.",
  },
  {
    question: "¿Puedo hacer las sesiones online?",
    answer:
      "Una parte importante del método (acompañamiento, SOMA, pautas de coherencia, grounding, revisión de hábitos) puede realizarse online. Otras terapias, como la biofotónica presencial, requieren acudir a consulta.",
  },
  {
    question: "¿Cada cuánto tiempo se recomienda venir?",
    answer:
      "Habitualmente comenzamos con sesiones cada 1–2 semanas y, según tu proceso se estabiliza, vamos espaciando. Buscamos un ritmo que te sostenga, no que te agobie.",
  },
  {
    question: "¿Trabajáis también con niños o adolescentes?",
    answer:
      "En algunos casos sí, siempre valorando primero la situación familiar y el momento vital. Cuando no es adecuado, orientamos a otros recursos más específicos.",
  },
  {
    question: "¿Qué pasa si después de varias sesiones no noto cambios?",
    answer:
      "Revisamos contigo lo que está ocurriendo, ajustamos el enfoque y, si vemos que el método no es lo que necesitas, te lo diremos con honestidad y te orientaremos hacia otras opciones.",
  },
];

// ───────────────────────────── COOKIE BANNER ─────────────────────────────

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [necessary] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("layna_cookies");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleSave = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      "layna_cookies",
      JSON.stringify({ necessary, analytics, marketing })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.16)]">
        <h3 className="text-sm font-semibold text-slate-900">
          Uso de cookies en Método LAYNA
        </h3>
        <p className="mt-2 text-xs text-slate-600">
          Utilizamos cookies para que la web funcione correctamente, mejorar la
          experiencia y, de forma opcional, analizar el uso del sitio.
        </p>

        <div className="mt-3 space-y-2 text-xs">
          <label className="flex items-center justify-between gap-3">
            <span className="text-slate-800">
              Necesarias{" "}
              <span className="text-slate-500">(siempre activas)</span>
            </span>
            <input
              type="checkbox"
              checked={necessary}
              disabled
              className="h-4 w-4 cursor-not-allowed rounded border-slate-300 text-teal-800"
            />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span className="text-slate-800">Analíticas</span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-teal-800"
            />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span className="text-slate-800">Marketing</span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-teal-800"
            />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Guardar selección
          </button>
          <button
            type="button"
            onClick={() => {
              setAnalytics(true);
              setMarketing(true);
              handleSave();
            }}
            className="rounded-xl bg-teal-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-800"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────── PÁGINA PRINCIPAL ─────────────────────────────

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[activeSlide];
  const whatsappHref = "https://wa.me/34646724156";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER GLOBAL */}
      <HeaderLayna whatsappHref={whatsappHref} />

      {/* ───────────── HERO ───────────── */}
      <section id="top" className="relative overflow-hidden">
        {/* Imágenes + overlay */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className={`absolute inset-0 ${slide.overlayClass}`} />
            </div>
          ))}
        </div>

        <div className="relative z-20">
          <Container1920 className="mx-auto flex min-h-[520px] max-w-[1440px] flex-col items-center justify-center px-4 py-16 text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-600">
              {current.eyebrow}
            </p>
            <h1
              className={`max-w-4xl text-4xl leading-tight md:text-5xl lg:text-[3.15rem] ${current.textClass}`}
            >
              {current.title}
            </h1>
            <p
              className={`mt-5 max-w-3xl text-base md:text-lg leading-7 ${
                current.textClass === "text-white"
                  ? "text-white/85"
                  : "text-slate-700"
              }`}
            >
              {current.text}
            </p>

            {/* ÚNICO CTA → formulario de contacto */}
            <div className="mt-8 flex justify-center">
              <a
                href="#contacto"
                className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-teal-900 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:translate-y-[1px] hover:bg-teal-800 hover:shadow-md"
              >
                Pide tu cita
              </a>
            </div>
          </Container1920>

          {/* Flechas */}
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() =>
              setActiveSlide((prev) =>
                prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
              )
            }
            className="absolute left-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Siguiente slide"
            onClick={() =>
              setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
            }
            className="absolute right-6 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicadores */}
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`pointer-events-auto h-1.5 w-6 rounded-full transition ${
                  index === activeSlide ? "bg-teal-900" : "bg-white/60"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MÉTODO LAYNA (INTRO + PASOS) ───────────── */}
      <MetodoLaynaSection />

      {/* ───────────── NUESTROS SERVICIOS ───────────── */}
      <section
        id="servicios"
        className="border-t border-slate-200 bg-white py-16 md:py-20"
      >
        <Container1920 className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-800">
              Nuestros servicios
            </p>
            <h3 className="mt-3 text-[2rem] font-semibold text-slate-900 md:text-[2.3rem]">
              Acompañamiento y terapias para diferentes momentos.
            </h3>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              No todo el mundo necesita lo mismo. Aquí tienes una vista rápida
              de las líneas de trabajo que solemos combinar en función de tu
              proceso.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviciosCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                  {card.tag}
                </p>
                <h4 className="mt-3 text-lg font-semibold text-slate-900">
                  {card.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-teal-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
            >
              Contacta con Método Layna
            </a>
          </div>
        </Container1920>
      </section>

      {/* ───────────── BIOCOM-LUX ───────────── */}
      <BiocomLuxSection whatsappHref={whatsappHref} />

      {/* ───────────── CTA WHATSAPP ───────────── */}
      <CitaCTASection whatsappHref={whatsappHref} />

      {/* ───────────── FAQS ───────────── */}
      <section
        id="faq"
        className="border-t border-slate-200 bg-white py-16 md:py-20"
      >
        <Container1920 className="mx-auto max-w-[1200px] px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-800">
              Preguntas frecuentes de nuestros clientes
            </p>
            <h3 className="mt-3 text-[2rem] font-semibold text-slate-900 md:text-[2.3rem]">
              Lo que suelen preguntarnos antes de empezar
            </h3>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              Aquí tienes algunas respuestas rápidas. Si tu pregunta es más
              concreta, escríbenos y la vemos con calma.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 px-6 py-4 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900 md:text-lg">
                      {item.question}
                    </span>
                    <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-1.5 text-slate-700">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {open && (
                    <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container1920>
      </section>

      {/* ───────────── CONTACTO ───────────── */}
      <section
        id="contacto"
        className="border-t border-slate-200 bg-slate-100 py-16 md:py-20"
      >
        <Container1920 className="mx-auto max-w-[1040px] px-4">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-800">
              Contacta con nosotros
            </p>
            <h3 className="mt-3 text-[2rem] font-semibold text-slate-900 md:text-[2.3rem]">
              Cuéntanos tu caso y vemos juntos el siguiente paso.
            </h3>
            <p className="mt-4 text-base text-slate-700 md:text-lg">
              Puedes resumir tu situación con calma. Te responderemos
              personalmente para orientarte sobre el tipo de proceso que puede
              ayudarte más.
            </p>
          </div>

          <div className="mx-auto max-w-[720px] rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-800">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-teal-700 focus:bg-white focus:ring-1 focus:ring-teal-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-800">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-teal-700 focus:bg-white focus:ring-1 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-800">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-teal-700 focus:bg-white focus:ring-1 focus:ring-teal-700"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-800">
                  ¿Qué te gustaría contarnos?
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-teal-700 focus:bg-white focus:ring-1 focus:ring-teal-700"
                />
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3 text-xs text-slate-700">
                <input
                  id="humano"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-700"
                />
                <label htmlFor="humano" className="cursor-pointer">
                  Marca esta casilla para verificar que eres humano.
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </Container1920>
      </section>

      {/* FOOTER GLOBAL */}
      <FooterLayna />

      {/* Botón flotante de WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-900 text-white shadow-lg hover:bg-teal-800"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <CookieBanner />
    </main>
  );
}