export default function PainSection() {
  const pains = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      title: 'Leads die verdwijnen',
      description:
        'Iemand vult een formulier in. Maar je zit midden in een WOD. Tegen de tijd dat je terugbelt, is diegene al ergens anders lid geworden.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
      ),
      title: 'Leden die stilletjes stoppen',
      description:
        'Je ziet het pas als ze al weg zijn. Geen signaal, geen kans om in te grijpen. Gewoon weg.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: 'Staff die inconsistent werkt',
      description:
        'De ene coach doet alles netjes. De andere improviseert. Kwaliteit hangt af van wie er dienst heeft — en dat voelen je leden.',
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Herken je dit?
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Je werkt keihard. Je coacht, je runnt de boel, je probeert te groeien. Maar ondertussen...
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cinnabar/10 text-cinnabar flex items-center justify-center mb-5 group-hover:bg-cinnabar/20 transition-colors">
                {pain.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {pain.title}
              </h3>
              <p className="text-dark-400 leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        {/* Resolution */}
        <div className="text-center">
          <p className="text-dark-300 text-base">
            Dit zijn geen persoonlijke tekortkomingen.{' '}
            <span className="text-white font-medium">Dit zijn systeemproblemen.</span>{' '}
            En systemen zijn oplosbaar.
          </p>
        </div>
      </div>
    </section>
  );
}
