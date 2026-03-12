import Link from 'next/link';

export default function SystemSection() {
  const layers = [
    {
      tag: 'Marketing & CRM',
      title: 'GymOps Flow',
      description:
        'Automatische opvolging van elke lead. Een complete marketingmachine, ingericht specifiek voor jouw gym. Inclusief je eigen website die naadloos integreert.',
      color: 'cinnabar',
      href: '/flow',
      features: ['Leadopvolging via WhatsApp & mail', 'Handgeschreven kaarten', 'Event flows met betaling', 'Google Review-automatisering'],
    },
    {
      tag: 'Gedragsautomatisering',
      title: 'Sportbit-integratie',
      description:
        'Koppeling met jouw ledenadministratie via Sportbit. GymOps ziet wie er komt, wie er niet komt, wie jarig is. Het systeem verstuurt automatisch het juiste bericht, op het juiste moment.',
      color: 'teal',
      href: '/flow',
      features: ['Bezoekfrequentie monitoren', 'Automatische re-engagement', 'Verjaardag & milestone flows', 'Churn-preventie signalen'],
    },
    {
      tag: 'Operaties',
      title: 'GymOps Pulse',
      description:
        'Jouw staff weet precies wat er moet gebeuren. Checklists, shift-handovers, coach feedback — alles in één app. Jij ziet als eigenaar live wat er speelt in je gym.',
      color: 'jonquil',
      href: '/pulse',
      features: ['Dagelijkse checklists', 'Shift-handovers', 'Incidentregistratie', 'Management dashboard'],
    },
  ];

  const colorMap: Record<string, { tag: string; dot: string; icon: string }> = {
    cinnabar: {
      tag: 'bg-cinnabar/10 text-cinnabar border-cinnabar/20',
      dot: 'bg-cinnabar',
      icon: 'text-cinnabar',
    },
    teal: {
      tag: 'bg-teal/10 text-teal border-teal/20',
      dot: 'bg-teal',
      icon: 'text-teal',
    },
    jonquil: {
      tag: 'bg-jonquil/10 text-jonquil-600 border-jonquil/20',
      dot: 'bg-jonquil',
      icon: 'text-jonquil',
    },
  };

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Één platform. Drie lagen.{' '}
            <span className="gradient-text">Volledig op autopilot.</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-3xl mx-auto">
            GymOps is geen verzameling losse tools. Het is één systeem dat je leadflow,
            klantbehoud en dagelijkse operaties met elkaar verbindt.
          </p>
        </div>

        {/* System layers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <Link
              key={index}
              href={layer.href}
              className="glass-card rounded-2xl p-8 flex flex-col group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Tag */}
              <span
                className={`inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-full text-xs font-medium border mb-6 ${colorMap[layer.color].tag}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${colorMap[layer.color].dot}`} />
                {layer.tag}
              </span>

              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                {layer.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed mb-6">
                {layer.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5 mt-auto mb-6">
                {layer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-dark-300">
                    <svg className={`w-4 h-4 flex-shrink-0 ${colorMap[layer.color].icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className={`flex items-center gap-1.5 text-sm font-medium ${colorMap[layer.color].icon} group-hover:gap-3 transition-all`}>
                Meer info
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
