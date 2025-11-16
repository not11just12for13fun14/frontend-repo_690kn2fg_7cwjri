export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400" />
            <span className="font-semibold text-gray-900">RV Consulting</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Consultoría financiera, análisis de datos, contabilidad y asesoría empresarial.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Compañía</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>El Salvador • Operación internacional</li>
            <li>contact@rvconsulting.co</li>
          </ul>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} RV Consulting. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
