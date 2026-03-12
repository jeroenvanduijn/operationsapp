import Link from 'next/link';

export default function PulseHighlightSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Checklists per dienst',
      description: 'Elke coach ziet zijn checklists — opening, sluiting, schoonmaak. Alles afgevinkt, elke shift.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      title: 'Shift-handovers',
      description: 'De avondcoach weet wat er die ochtend is gebeurd. Gestructureerd, bewaard, terug te vinden.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: 'Management dashboard',
      description: 'Live overzicht van afgevinkte taken, incidentrapportage en coach feedback — zonder appjes te sturen.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      ),
      title: 'Incidentregistratie',
      description: 'Incidenten loggen in 30 seconden. Direct op je telefoon. Historisch bewaard voor evaluaties.',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900/50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              GymOps Pulse
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Operationele rust
            </h2>
            <p className="text-dark-300 text-lg mb-8 leading-relaxed">
              Geen WhatsApp-groepen meer voor operationele zaken.
              Geen &apos;ik wist het niet&apos;. Gewoon: het werkt.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/pulse"
              className="text-teal text-sm font-semibold hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
            >
              Meer over Pulse
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Visual mockup */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-6 border-teal/10">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-cinnabar/60" />
                <div className="w-3 h-3 rounded-full bg-jonquil/60" />
                <div className="w-3 h-3 rounded-full bg-teal/60" />
                <span className="text-dark-500 text-xs ml-2 font-mono">pulse.gymops.nl</span>
              </div>

              {/* Mockup checklist */}
              <div className="space-y-3 mb-6">
                <p className="text-xs text-dark-400 uppercase tracking-wider mb-2">Opening checklist — Maandag</p>
                {['Verlichting & muziek aan', 'Materiaal check', 'Whiteboard bijwerken', 'Koffiezetapparaat starten'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03]">
                    <div className={`w-5 h-5 rounded flex items-center justify-center text-xs ${i < 3 ? 'bg-teal text-white' : 'border border-dark-600'}`}>
                      {i < 3 && '✓'}
                    </div>
                    <span className={`text-sm ${i < 3 ? 'text-dark-400 line-through' : 'text-dark-200'}`}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mockup handover */}
              <div className="p-3 rounded-lg bg-teal/5 border border-teal/10">
                <p className="text-xs text-teal mb-1 font-medium">💬 Shift handover — Coach Lisa</p>
                <p className="text-xs text-dark-400">&quot;Rij 3 rower maakt geluid, even laten checken. Verder alles top!&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
