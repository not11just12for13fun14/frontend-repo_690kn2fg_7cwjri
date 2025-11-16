export default function Services() {
  const services = [
    { title: 'Análisis financiero, presupuestos y proyecciones', desc: 'Elaboración de presupuestos, proyecciones de flujo de caja y escenarios para decisiones estratégicas.' },
    { title: 'Contabilidad y registro contable', desc: 'Contabilidad diaria, conciliaciones, estados financieros y reportes en cumplimiento.' },
    { title: 'Asesoría Fiscal, Tributaria, Financiera y Contable', desc: 'Cumplimiento, planeación y estrategias fiscales con enfoque práctico y transparente.' },
    { title: 'Creación de empresas y registros', desc: 'Acompañamiento integral en constitución de sociedades y trámites empresariales.' },
    { title: 'Implementación de Facturación Electrónica', desc: 'Selección, configuración y puesta en marcha de sistemas de facturación electrónica.' },
    { title: 'Dashboards financieros y optimización', desc: 'Diseño de tableros de KPIs, automatización y mejoras de procesos para optimizar el desempeño.' }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Servicios</h1>
        <p className="mt-3 text-gray-700">Ofertas estructuradas para brindar claridad, control y resultados medibles.</p>
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
        <p className="text-gray-800">¿Buscas algo específico? Recibe una propuesta a la medida según tus necesidades.</p>
        <a href="/contact" className="mt-3 inline-block px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Solicitar consulta</a>
      </div>
    </div>
  )
}
