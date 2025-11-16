import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Contact</h1>
        <p className="mt-3 text-gray-700">For inquiries and consultations, reach us at contact@rvconsulting.co or send a message below.</p>
      </header>

      <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" value={form.message} onChange={onChange} rows={5} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
        </div>
        <button className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Send</button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  )
}
