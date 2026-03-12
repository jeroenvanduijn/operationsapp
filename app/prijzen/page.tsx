'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PrijzenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Waarom minimaal 12 maanden?',
      a: 'De custom website en volledige systeeminrichting zijn een serieuze investering van onze kant. We bouwen iets op maat — dat vraagt tijd en expertise. Het eerste jaar is de periode waarin het systeem echt gaat werken. Na 12 maanden kun je maandelijks opzeggen.',
    },
    {
      q: 'Zijn er opstartkosten?',
      a: 'Nee. Geen eenmalige setup-fee. Alles zit in de maandelijkse prijs.',
    },
    {
      q: 'Kan ik later upgraden van Flow naar Pro?',
      a: 'Ja. Je kunt op elk moment GymOps Pulse toevoegen voor +€200 per maand.',
    },
    {
      q: 'Is Sportbit verplicht?',
      a: 'De Sportbit-koppeling zit standaard in GymOps Flow en is een kernonderdeel van het systeem. Gebruik je een ander ledenadministratiesysteem? Neem contact op — we kijken wat mogelijk is.',
    },
    {
      q: 'Zijn de handgeschreven kaarten een extra kost?',
      a: 'De automatisering zit inbegrepen in Flow. De kaarten zelf worden per stuk verrekend — prijzen op aanvraag afhankelijk van volume. Gemiddeld een paar euro per kaart.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Helder geprijsd. Geen verrassingen.
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Twee pakketten. Alles inbegrepen. Minimaal 12 maanden — want een goed systeem heeft
            tijd nodig om te groeien.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flow */}
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cinnabar/10 text-cinnabar border border-cinnabar/20 mb-6">
                GymOps Flow
              </span>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-heading font-bold text-white">€400</span>
                <span className="text-dark-400">/ maand</span>
              </div>
              <p className="text-dark-500 text-sm mb-8">Minimale looptijd: 12 maanden</p>

              <h3 className="text-white text-sm font-semibold mb-4">Wat je krijgt:</h3>
              <ul className="space-y-3 mb-10">
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
                  '4 onboarding en strategie-calls (max. 1 per maand)',
                  'Technische hosting en doorlopende updates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-300">
                    <svg className="w-4 h-4 text-cinnabar flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/demo" className="block text-center px-6 py-3.5 rounded-xl border border-cinnabar text-cinnabar font-semibold hover:bg-cinnabar hover:text-white transition-all">
                Boek een Flow demo
              </Link>
            </div>

            {/* Pro */}
            <div className="glass-card rounded-2xl p-8 lg:p-10 border-cinnabar/20 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cinnabar rounded-full text-xs font-semibold text-white whitespace-nowrap">
                Meest gekozen
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
                GymOps Pro
              </span>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-heading font-bold text-white">€600</span>
                <span className="text-dark-400">/ maand</span>
              </div>
              <p className="text-dark-500 text-sm mb-8">Minimale looptijd: 12 maanden</p>

              <h3 className="text-white text-sm font-semibold mb-4">Alles van GymOps Flow, plus:</h3>
              <ul className="space-y-3 mb-10">
                {[
                  'GymOps Pulse Staff App — voor jouw coaches',
                  'GymOps Pulse Management Dashboard — voor jou als eigenaar',
                  'Onbeperkt aantal medewerkers in de app',
                  'Checklists, shift-handovers, incidentregistratie',
                  'Real-time operationeel overzicht',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-300">
                    <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/demo" className="block text-center px-6 py-3.5 rounded-xl bg-cinnabar text-white font-semibold hover:bg-cinnabar-600 transition-all shadow-lg shadow-cinnabar/25">
                Boek een Pro demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Veelgestelde vragen
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium text-white text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-dark-400 transform transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-dark-400 text-sm leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Niet zeker welk pakket bij je past?
          </h2>
          <p className="text-dark-300 text-lg mb-8">
            Plan een gratis demo. We kijken samen naar jouw situatie en adviseren wat het meeste oplevert.
          </p>
          <Link href="/demo" className="btn-primary">
            Plan een gratis demo
          </Link>
        </div>
      </section>
    </div>
  );
}
