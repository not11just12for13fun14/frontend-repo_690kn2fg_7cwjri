export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">About RV Consulting</h1>
        <p className="mt-3 text-gray-700">Founded in El Salvador and now operating internationally, RV Consulting provides precise financial guidance grounded in transparency, analytical rigor, and long-term partnership.</p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 text-gray-700">
          <p>We partner with founders, finance teams, and executives to turn complex financial data into clear decisions. Our experience spans budgeting, forecasting, accounting operations, fiscal advisory, and data-driven optimization.</p>
          <p>Our mission is to equip organizations with the clarity, structure, and tools to grow sustainably. We value transparency, precision, and measurable outcomes.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transparency and trust at every step</li>
            <li>Analytical depth and practical implementation</li>
            <li>Commitment to long-term client success</li>
          </ul>
        </div>
        <aside className="p-6 rounded-xl border border-gray-200 bg-white">
          <p className="font-semibold text-gray-900">At a glance</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Origin: El Salvador</li>
            <li>Reach: International</li>
            <li>Sectors: Finance, accounting, tax, analytics</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
