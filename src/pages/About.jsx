export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Sobre RV Consulting</h1>
        <p className="mt-3 text-gray-700">Fundada en El Salvador y hoy con operación internacional, RV Consulting brinda guía financiera precisa basada en transparencia, rigor analítico y relaciones de largo plazo.</p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 text-gray-700">
          <p>Colaboramos con fundadores, equipos financieros y directivos para convertir datos complejos en decisiones claras. Nuestra experiencia abarca presupuestos, proyecciones, operaciones contables, asesoría fiscal y optimización basada en datos.</p>
          <p>Nuestra misión es dotar a las organizaciones de claridad, estructura y herramientas para crecer de forma sostenible. Valoramos la transparencia, la precisión y los resultados medibles.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transparencia y confianza en cada paso</li>
            <li>Profundidad analítica con implementación práctica</li>
            <li>Compromiso con el éxito a largo plazo de nuestros clientes</li>
          </ul>
        </div>
        <aside className="p-6 rounded-xl border border-gray-200 bg-white">
          <p className="font-semibold text-gray-900">De un vistazo</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Origen: El Salvador</li>
            <li>Alcance: Internacional</li>
            <li>Sectores: Finanzas, contabilidad, impuestos y analítica</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
