export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {kicker && <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>}
      {title && <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">{title}</h2>}
      {subtitle && <p className="mt-3 text-gray-700">{subtitle}</p>}
    </div>
  )
}
