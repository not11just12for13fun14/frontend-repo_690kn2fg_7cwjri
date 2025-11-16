import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <NavLink to="/" onClick={() => setOpen(false)} className={({isActive})=>`hover:text-blue-700 ${isActive?'text-blue-700':'text-gray-700'}`}>Inicio</NavLink>
      <NavLink to="/services" onClick={() => setOpen(false)} className={({isActive})=>`hover:text-blue-700 ${isActive?'text-blue-700':'text-gray-700'}`}>Servicios</NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive})=>`hover:text-blue-700 ${isActive?'text-blue-700':'text-gray-700'}`}>Sobre nosotros</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive})=>`hover:text-blue-700 ${isActive?'text-blue-700':'text-gray-700'}`}>Contacto</NavLink>
    </div>
  )

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400" />
            <span className="font-semibold text-gray-900">RV Consulting</span>
          </Link>

          <nav className="hidden md:block">{navItem}</nav>

          <div className="md:hidden">
            <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="p-2 rounded-md border border-gray-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            {navItem}
          </div>
        )}
      </div>
    </header>
  )
}
