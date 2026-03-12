'use client';

import Link from 'next/link';
import ScreenshotShowcase from '@/components/ScreenshotShowcase';

const BLOB_BASE = 'https://jfwdrup73imvcrrq.public.blob.vercel-storage.com/screenshots';

const flowScreenshots = [
  {
    src: `${BLOB_BASE}/Gymops%20flow%20-%20lead%20overzicht.png`,
    alt: 'GymOps Flow — Lead Pipeline',
    caption: 'Lead pipeline',
  },
  {
    src: `${BLOB_BASE}/Gymops%20flow%20-%20automated%20whatsapps.png`,
    alt: 'GymOps Flow — Automatische WhatsApp',
    caption: 'WhatsApp automatisering',
  },
  {
    src: `${BLOB_BASE}/Gymops%20flow%20-%20automation.png`,
    alt: 'GymOps Flow — Automatiseringen',
    caption: 'Automatiseringen',
  },
  {
    src: `${BLOB_BASE}/Gymops%20flow%20-%20contacten%20overzicht.png`,
    alt: 'GymOps Flow — Contacten',
    caption: 'Contacten overzicht',
  },
  {
    src: `${BLOB_BASE}/Gymops%20flow%20-%20handgeschreven%20kaarten.png`,
    alt: 'GymOps Flow — Handgeschreven kaarten',
    caption: 'Kaarten versturen',
  },
  {
    src: `${BLOB_BASE}/Gymopse%20flow%20-%20handgeschreven%20kaart%20voorbeeld.jpg`,
    alt: 'GymOps Flow — Kaart voorbeeld',
    caption: 'Echt resultaat',
  },
];

export default function FlowPage() {
  const triggerExamples = [
    'Bezoekfrequentie — wie komt er minder',
    'Eerste bezoek — verwelkomingflow starten',
    'Verjaardagen — automatische felicitatie',
    'Milestones — 100e bezoek, 1 jaar lid',
    'Lange afwezigheid — re-engagement',
    'Churn-risico — tijdig signaal',
  ];

  const flowFeatures = [
    {
      emoji: '⚡',
      title: 'Automatische leadopvolging',
      description:
        'Iemand vult een formulier in → WhatsApp + belscript starten automatisch. Geen reactie na 24 uur → tweede automatische opvolging. Wordt diegene lid → welkomstflow van 30 dagen start.',
    },
    {
      emoji: '✍️',
      title: 'Handgeschreven kaarten',
      description:
        'Echte kaart, echt handschrift, echte envelop. Verstuurd binnen 15 seconden na trigger. Eerste bezoek, verjaardag, 1 jaar lid — jij kiest wanneer. Leden praten erover, delen het op Instagram.',
    },
    {
      emoji: '🎟️',
      title: 'Event flows met betaling',
      description:
        'Hyrox-simulatie, open dag, workshop — bouw in een paar klikken een complete event-flow. Aanmeldpagina met jouw branding, automatische betaling, bevestiging + herinneringen.',
    },
    {
      emoji: '⭐',
      title: 'Google Reviews automatisering',
      description:
        'Net na een geweldige les, een milestone, een positieve check-in — GymOps stuurt automatisch een vriendelijk verzoek. Directe link naar Google. Meer reviews, hogere score, betere vindbaarheid.',
    },
    {
      emoji: '🏆',
      title: 'Milestones vieren',
      description:
        '10e bezoek → automatisch bericht. 1 jaar lid → persoonlijke felicitatie. PR gezet → automatische reactie. Elk milestone dat jij belangrijk vindt. Leden die zich gezien voelen, blijven.',
    },
    {
      emoji: '📱',
      title: 'Je eigen website',
      description:
        'Een custom website die naadloos integreert met het systeem. Ontwerp, bouw en koppeling inbegrepen. Geen apart CMS nodig — alles onder één dak.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cinnabar/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cinnabar/10 text-cinnabar border border-cinnabar/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cinnabar" />
              GymOps Flow
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-6">
              Elke lead opgevolgd.{' '}
              <span className="text-cinnabar">Elk lid behouden.</span>{' '}
              Elk moment benut.
            </h1>
            <p className="text-lg text-dark-300 mb-8 leading-relaxed max-w-2xl">
              GymOps Flow is jouw complete marketing- en retentiesysteem. Gebouwd op GoHighLevel,
              volledig ingericht voor micro gyms, gekoppeld aan Sportbit. Van automatische
              leadopvolging tot handgeschreven kaarten — het systeem werkt terwijl jij coacht.
            </p>
            <Link href="/demo" className="btn-primary">
              Plan een demo van Flow
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshot showcase */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScreenshotShowcase
            title="Bekijk het platform"
            subtitle="Een volledig ingericht systeem — klaar om voor jou te werken."
            screenshots={flowScreenshots}
            accentColor="cinnabar"
          />
        </div>
      </section>

      {/* Wat is Flow */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Meer dan een CRM. Een complete groeimachine.
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              GymOps Flow is een GoHighLevel whitelabel-omgeving die volledig is ingericht
              voor jouw gym. Geen generiek systeem dat je zelf nog moet configureren — wij bouwen het voor je.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sportbit Koppeling */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Sportbit-integratie
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Het systeem dat meedenkt met jouw leden
              </h2>
              <p className="text-dark-300 text-lg mb-6 leading-relaxed">
                Wat maakt GymOps Flow uniek? De integratie met Sportbit. Hierdoor weet het
                systeem niet alleen wie je leads zijn — het weet wat jouw leden doen.
              </p>
              <p className="text-dark-400 text-sm mb-2 font-medium">Automatische triggers op basis van:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {triggerExamples.map((trigger, i) => (
                <div key={i} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-300 text-sm">{trigger}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investering */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            GymOps Flow — Wat het kost
          </h2>
          <div className="glass-card rounded-2xl p-8 mt-8">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-heading font-bold text-white">€400</span>
              <span className="text-dark-400 text-lg">/ maand</span>
            </div>
            <p className="text-dark-400 text-sm mb-8">Minimale looptijd: 12 maanden</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-lg mx-auto mb-8">
              {[
                'GHL whitelabel platform — volledig ingericht',
                'Custom website — ontwerp, bouw en koppeling inbegrepen',
                'Sportbit-integratie — gedragsgerichte automatisering',
                'Leadopvolging via WhatsApp, mail en SMS',
                'Retentie- en re-engagement flows',
                'Handgeschreven kaarten-automatisering',
                'Event flows met betalingskoppeling',
                'Google Review-automatisering',
                'Milestone- en klantreis-flows',
                '4 onboarding en strategie-calls',
                'Technische hosting en doorlopende updates',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 py-1">
                  <svg className="w-4 h-4 text-cinnabar flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/demo" className="btn-primary">
              Plan een demo van Flow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
