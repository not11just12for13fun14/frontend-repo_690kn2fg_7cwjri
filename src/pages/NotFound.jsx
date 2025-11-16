import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-gray-900">404</h1>
        <p className="mt-2 text-gray-700">La página que buscas no existe.</p>
        <Link to="/" className="mt-6 inline-block px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Volver al inicio</Link>
      </div>
    </div>
  )
}
