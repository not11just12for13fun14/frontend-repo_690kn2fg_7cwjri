export default function Services() {
  const services = [
    { title: 'Financial analysis, budgeting, and forecasting', desc: 'Development of budgets, cash flow projections, and scenario-based forecasts to support strategic decisions.' },
    { title: 'Bookkeeping and accounting', desc: 'Day-to-day accounting, reconciliations, financial statements, and compliant reporting.' },
    { title: 'Asesoría Fiscal, Tributaria, Financiera y Contable', desc: 'Cumplimiento, planificación y estrategias fiscales con un enfoque práctico y transparente.' },
    { title: 'Creación de empresas y registros', desc: 'Acompañamiento integral en la constitución de sociedades y trámites empresariales.' },
    { title: 'Implementación de Facturación Electrónica', desc: 'Selección, configuración y puesta en marcha de sistemas de facturación electrónica.' },
    { title: 'Financial dashboards & optimization', desc: 'Design of KPI dashboards, automation, and process improvements to optimize performance.' }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Services</h1>
        <p className="mt-3 text-gray-700">Structured offerings designed to deliver clarity, control, and measurable results.</p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-blue-50 border border-blue-200">
        <p className="text-gray-800">Looking for something specific? Get a tailored proposal based on your needs.</p>
        <a href="/contact" className="mt-3 inline-block px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Request consultation</a>
      </div>
    </div>
  )
}
