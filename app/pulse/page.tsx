import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GymOps Pulse — Staff App & Operationeel Overzicht',
  description:
    'Dagelijkse checklists, shift-handovers, incidentregistratie en een management dashboard. GymOps Pulse geeft operationele rust aan jouw gym.',
};

export default function PulsePage() {
  const coachFeatures = [
    { title: 'Dagelijkse routines en checklists per dienst', icon: '✓' },
    { title: 'Opening- en sluitingsprocedures stap voor stap', icon: '📋' },
    { title: 'Incidenten loggen in 30 seconden', icon: '⚡' },
    { title: 'Shift-handover: bericht achter voor de volgende coach', icon: '💬' },
    { title: 'Werkschema en taakoverzicht altijd bij de hand', icon: '📱' },
  ];

  const managerFeatures = [
    { title: 'Real-time overzicht van afgevinkte taken', icon: '📊' },
    { title: 'Incidentrapportage direct op je telefoon', icon: '🔔' },
    { title: 'Coach feedback bijhouden en terugkijken', icon: '📝' },
    { title: 'Signalering als routines niet zijn afgerond', icon: '⚠️' },
    { title: 'Historisch overzicht voor evaluaties', icon: '📈' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              GymOps Pulse
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-6">
              Jouw team weet precies wat er moet gebeuren.{' '}
              <span className="text-teal">Altijd.</span>
            </h1>
            <p className="text-lg text-dark-300 mb-8 leading-relaxed max-w-2xl">
              GymOps Pulse is de operations app voor jouw coaches en jouw management dashboard.
              Checklists, shift-handovers, incidentregistratie — alles in één plek. Geen
              WhatsApp-chaos meer.
            </p>
            <Link href="/demo" className="btn-primary">
              Plan een demo van Pulse
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Staff App */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Coach App */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Staff App — voor je coaches
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                Jouw coaches openen de app en weten direct wat er moet gebeuren. Geen vragen,
                geen twijfel, geen gemiste taken.
              </p>

              <div className="space-y-4">
                {coachFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 glass-card rounded-xl px-5 py-4">
                    <span className="text-xl flex-shrink-0">{feature.icon}</span>
                    <span className="text-dark-200 text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Dashboard */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                Management Dashboard — voor jou
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                Live inzicht in wat er speelt in je gym — zonder er zelf bij te hoeven zijn.
              </p>

              <div className="space-y-4">
                {managerFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 glass-card rounded-xl px-5 py-4">
                    <span className="text-xl flex-shrink-0">{feature.icon}</span>
                    <span className="text-dark-200 text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Pulse */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Geen WhatsApp-groepen meer voor operationele zaken
          </h2>
          <p className="text-dark-300 text-lg mb-8 leading-relaxed">
            Herken je dit? Je hebt een WhatsApp-groep met je coaches. Operationele berichten,
            vragen, updates — alles door elkaar. Niemand kan meer terugvinden wat er twee weken
            geleden is afgesproken.
          </p>
          <p className="text-dark-400 text-base mb-10">
            GymOps Pulse lost dit op. Alles wat operationeel is, gaat via de app. Gestructureerd,
            bewaard, terug te vinden.
          </p>

          {/* Pricing */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl font-heading font-bold text-white">+€200</span>
              <span className="text-dark-400 text-sm">/ maand</span>
            </div>
            <p className="text-dark-400 text-sm mb-6">
              Bovenop GymOps Flow. Alleen beschikbaar in combinatie met Flow (GymOps Pro pakket: €600/mnd).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto mb-8">
              {[
                'Staff app (Progressive Web App)',
                'Management dashboard',
                'Onbeperkt aantal medewerkers',
                'Doorlopende updates',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/demo" className="btn-primary">
              Plan een demo van het complete pakket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
