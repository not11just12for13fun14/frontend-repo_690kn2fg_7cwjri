import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">Clarity for confident decisions.</h1>
            <p className="mt-4 text-gray-700 md:text-lg">RV Consulting delivers precise financial insights, rigorous analysis, and trustworthy guidance for resilient, long-term growth.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Book a consultation</Link>
              <Link to="/services" className="inline-flex items-center px-5 py-3 rounded-md bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 transition">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Financial analysis, budgeting, and forecasting',
              desc: 'Plan with precision using data-driven models and scenario planning.'
            },
            {
              title: 'Bookkeeping and accounting',
              desc: 'Accurate records, compliant reporting, and clean financial statements.'
            },
            {
              title: 'Asesoría Fiscal, Tributaria, Financiera y Contable',
              desc: 'Acompañamiento experto en cumplimiento y optimización fiscal.'
            }
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 bg-white/70 backdrop-blur">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
