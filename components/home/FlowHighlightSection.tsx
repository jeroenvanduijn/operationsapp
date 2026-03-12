import Link from 'next/link';

export default function FlowHighlightSection() {
  const features = [
    {
      emoji: '⚡',
      title: 'Gedragsautomatisering via Sportbit',
      items: [
        'Lead binnenkomt → WhatsApp + belscript starten automatisch',
        'Geen reactie na 24 uur → tweede automatische opvolging',
        'Nieuw lid → welkomstflow van 30 dagen start',
        '14 dagen niet geweest → re-engagement bericht',
      ],
    },
    {
      emoji: '✍️',
      title: 'Handgeschreven kaarten',
      items: [
        'Echte kaart, echt handschrift, echte envelop',
        'Verstuurd binnen 15 seconden na trigger',
        'Eerste bezoek, verjaardag, 1 jaar lid',
        'Leden praten erover en delen het op Instagram',
      ],
    },
    {
      emoji: '🎟️',
      title: 'Event flows met betaling',
      items: [
        'Aanmeldpagina met jouw branding',
        'Automatische betalingsverwerking',
        'Bevestigingsmail + WhatsApp na betaling',
        'Herinneringen en follow-up na het event',
      ],
    },
    {
      emoji: '⭐',
      title: 'Google Reviews automatisering',
      items: [
        'Verzoek op het juiste moment na een positieve ervaring',
        'Directe link naar Google',
        'Meer reviews, hogere score, betere vindbaarheid',
        'Volledig automatisch',
      ],
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cinnabar/10 text-cinnabar border border-cinnabar/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cinnabar" />
              GymOps Flow
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Wat het systeem voor je doet
            </h2>
          </div>
          <Link
            href="/flow"
            className="text-cinnabar text-sm font-semibold hover:text-cinnabar-400 transition-colors flex items-center gap-1.5 group"
          >
            Meer over Flow
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-8">
              <div className="text-3xl mb-4">{feature.emoji}</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2.5">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-dark-300">
                    <svg className="w-4 h-4 text-cinnabar flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
