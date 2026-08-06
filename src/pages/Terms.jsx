import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink py-20 px-6 sm:px-10 relative">
      <div className="noise-overlay" />
      <div className="max-w-3xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-10 font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Last updated: August 2026</p>
          <p>Welcome to Tony's Taverna! These terms and conditions outline the rules and regulations for the use of Tony's Taverna's Website, located in Ayia Napa, Cyprus.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Tony's Taverna's website if you do not agree to take all of the terms and conditions stated on this page.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">Reservations & Seating</h2>
          <p>Reservations made through our website form or contact options are request-only and do not guarantee a table until confirmed by our staff via email or phone. During peak summer season, we recommend booking well in advance.</p>
          <p>We hold tables for a maximum of 15 minutes past the reserved time, after which the table may be released. Please notify us if you are running late.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">Menu & Allergen Disclaimer</h2>
          <p>While we make every effort to keep our online menus, prices, and descriptions accurate and up-to-date, ingredients and pricing are subject to change based on seasonality and market availability. Please consult your server for the latest daily specials.</p>
          <p>If you have food allergies, intolerances, or severe sensitivities, please notify our staff before ordering. Traditional Cypriot cuisine frequently contains nuts, dairy, wheat, and sesame.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">Intellectual Property</h2>
          <p>Unless otherwise stated, Tony's Taverna and/or its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may access this from Tony's Taverna for your own personal use subjected to restrictions set in these terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}