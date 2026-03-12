import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cinnabar/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Helder geprijsd. Geen verborgen kosten.
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Flow */}
          <div className="glass-card rounded-2xl p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cinnabar/10 text-cinnabar border border-cinnabar/20 mb-4">
              GymOps Flow
            </span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-heading font-bold text-white">€400</span>
              <span className="text-dark-400 text-sm">/ maand</span>
            </div>
            <p className="text-dark-400 text-sm mb-6">Minimale looptijd: 12 maanden</p>

            <ul className="space-y-2.5 mb-8">
              {[
                'GHL whitelabel platform',
                'Custom website',
                'Sportbit-integratie',
                'Leadopvolging via WhatsApp & mail',
                'Handgeschreven kaarten',
                'Event flows met betaling',
                '4 onboarding calls',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-dark-300">
                  <svg className="w-4 h-4 text-cinnabar flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/demo" className="block text-center px-6 py-3 rounded-xl border border-cinnabar text-cinnabar font-semibold text-sm hover:bg-cinnabar hover:text-white transition-all">
              Boek een Flow demo
            </Link>
          </div>

          {/* Pro */}
          <div className="glass-card rounded-2xl p-8 border-cinnabar/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cinnabar rounded-full text-xs font-semibold text-white">
              Aanbevolen
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20 mb-4">
              GymOps Pro
            </span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-heading font-bold text-white">€600</span>
              <span className="text-dark-400 text-sm">/ maand</span>
            </div>
            <p className="text-dark-400 text-sm mb-6">Minimale looptijd: 12 maanden</p>

            <ul className="space-y-2.5 mb-8">
              {[
                'Alles van GymOps Flow',
                'GymOps Pulse Staff App',
                'Management Dashboard',
                'Onbeperkt aantal medewerkers',
                'Checklists & shift-handovers',
                'Incidentregistratie',
                'Real-time operationeel overzicht',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-dark-300">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/demo" className="block text-center px-6 py-3 rounded-xl bg-cinnabar text-white font-semibold text-sm hover:bg-cinnabar-600 transition-all shadow-lg shadow-cinnabar/25">
              Boek een Pro demo
            </Link>
          </div>
        </div>

        {/* Link to full pricing */}
        <div className="text-center mt-10">
          <Link href="/prijzen" className="text-dark-400 text-sm hover:text-white transition-colors">
            Bekijk alle details en FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}
