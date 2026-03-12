'use client';

import { useState } from 'react';

export default function DemoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const expectations = [
    'We kijken naar jouw huidige situatie: leads, retentie, operaties',
    'We laten live zien hoe de automatisering werkt',
    'We tonen de Sportbit-koppeling en concrete triggervoorbeelden',
    'We laten de handgeschreven kaarten en event flows zien',
    'Je krijgt een eerlijk advies of GymOps past bij jouw gym',
    'Je gaat weg met concrete inzichten — ook als je niet aankoopt',
  ];

  const faqs = [
    {
      q: 'Is de demo echt gratis?',
      a: 'Ja. Geen verborgen kosten, geen verplichtingen. Gewoon een gesprek.',
    },
    {
      q: 'Hoe lang duurt het?',
      a: 'Maximaal 30 minuten. We respecteren jouw tijd.',
    },
    {
      q: 'Moet ik technisch onderlegd zijn?',
      a: 'Absoluut niet. Je hoeft niets te weten over software of automatisering. Dat is precies waarom GymOps bestaat.',
    },
    {
      q: 'Wat als ik nog niet zeker weet of het iets voor mij is?',
      a: 'Dan is de demo precies de juiste stap. We helpen je erachter te komen — en als het niet past, zeggen we dat gewoon.',
    },
  ];

  const whatsappUrl =
    'https://wa.me/31624658042?text=' +
    encodeURIComponent(
      'Hoi, ik wil graag een demo plannen van GymOps. Mijn gym is: '
    );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Zie GymOps in actie —{' '}
            <span className="gradient-text">voor jouw gym.</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            In 30 minuten laten we je zien hoe het systeem werkt. Geen PowerPoint.
            Geen verkooppraatje. Gewoon het systeem, live, afgestemd op jouw situatie.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Expectations */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
                Wat er in de demo gebeurt
              </h2>

              <div className="space-y-3 mb-10">
                {expectations.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card rounded-xl px-5 py-4">
                    <div className="w-6 h-6 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-dark-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: WhatsApp CTA */}
            <div>
              <div className="glass-card rounded-2xl p-8 lg:p-10 border-teal/10">
                <h2 className="font-heading text-2xl font-bold text-white mb-3">
                  Plan jouw demo
                </h2>
                <p className="text-dark-400 text-sm mb-8 leading-relaxed">
                  Stuur ons een WhatsApp bericht en we nemen binnen 1 werkdag contact op
                  om een tijd in te plannen. Lekker simpel.
                </p>

                {/* WhatsApp button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#25D366] rounded-xl text-white font-semibold text-lg hover:bg-[#1da851] transition-all shadow-lg shadow-[#25D366]/25 mb-6"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Stuur een WhatsApp
                </a>

                <div className="text-center">
                  <p className="text-dark-500 text-xs">
                    Of bel direct:{' '}
                    <a href="tel:+31624658042" className="text-dark-300 hover:text-white transition-colors">
                      +31 6 24658042
                    </a>
                  </p>
                </div>

                {/* Trust */}
                <div className="border-t border-white/[0.06] mt-8 pt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-dark-500 text-xs">Duur</div>
                    <div className="text-white text-sm font-medium">30 min</div>
                  </div>
                  <div>
                    <div className="text-dark-500 text-xs">Kosten</div>
                    <div className="text-white text-sm font-medium">Gratis</div>
                  </div>
                  <div>
                    <div className="text-dark-500 text-xs">Reactie</div>
                    <div className="text-white text-sm font-medium">&lt; 1 werkdag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
