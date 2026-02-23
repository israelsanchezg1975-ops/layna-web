export default function CursoLaynaPage() {
  // ⬇⬇⬇ AQUÍ pegarás el HTML que te dé Gemini (solo lo de dentro del <body>) ⬇⬇⬇
  const CURSO_HTML = `
    <h1>Curso Layna</h1>
    <p>Ejemplo de contenido. Sustituye esto por el código de Gemini.</p>
  `;
  // ⬆⬆⬆ LUEGO sustituyes ese ejemplo por TU HTML ⬆⬆⬆

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-5xl p-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
            Interno · Curso Layna
          </p>

          {/* Aquí pintamos tal cual el HTML que has pegado arriba */}
          <div dangerouslySetInnerHTML={{ __html: CURSO_HTML }} />
        </div>
      </div>
    </main>
  );
}