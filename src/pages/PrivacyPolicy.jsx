import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink py-20 px-6 sm:px-10 relative">
      <div className="noise-overlay" />
      <div className="max-w-3xl mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-10 font-medium transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Last updated: August 2026</p>
          <p>At Tony's Taverna, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Tony's Taverna and how we use it.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">Information We Collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p>If you contact us or make a reservation request, we may receive additional information about you such as your name, email address, phone number, date and time of reservation, guest count, and any special requests or dietary notes.</p>
          <h2 className="font-display font-bold text-2xl text-ink mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Manage, confirm, and personalize your dining reservations</li>
            <li>Respond to your direct inquiries, feedback, and special requests</li>
            <li>Maintain, improve, and optimize our website experience</li>
            <li>Ensure the health, safety, and security of our guests and tavern operations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}