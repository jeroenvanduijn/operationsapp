import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voor Wie — GymOps is gebouwd voor micro gym-eigenaren',
  description:
    'GymOps is gebouwd voor CrossFit box eigenaren, boutique studio owners en microgym ondernemers die serieus willen groeien.',
};

export default function VoorWiePage() {
  const audiences = [
    {
      emoji: '🏋️',
      title: 'Je bent eigenaar van een CrossFit box',
      description:
        'Je hebt een vaste community, maar je weet dat je leads mist en dat je retentie beter kan. Je wilt dat de operatie loopt zonder dat jij alles hoeft te controleren.',
    },
    {
      emoji: '💪',
      title: 'Je runt een boutique fitness studio',
      description:
        'Personal training, groepslessen, small group coaching — jouw gym heeft een sterke identiteit. Nu wil je die laten groeien zonder de sfeer te verliezen.',
    },
    {
      emoji: '🚀',
      title: 'Je hebt een microgym of PT studio',
      description:
        'Misschien ben je net gestart, of je hebt een stabiele basis maar wilt de volgende stap zetten. Je doet nu alles zelf — en dat schaalt niet.',
    },
  ];

  const notFor = [
    'Grote fitnessketens met eigen IT-afdeling',
    'Gyms die al een volledig werkend automatiseringssysteem hebben',
    'Eigenaren die niet bereid zijn minimaal 12 maanden te investeren in hun systeem',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            GymOps is gebouwd voor micro gym-eigenaren die{' '}
            <span className="gradient-text">serieus willen groeien.</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Niet voor grote ketens met marketingteams. Niet voor hobbyisten. Voor jou — de
            eigenaar-coach die een professionele gym runt en weet dat er meer in zit.
          </p>
        </div>
      </section>

      {/* Doelgroepen */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Past GymOps bij jou?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className="text-4xl mb-5">{audience.emoji}</div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niet voor iedereen */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Voor wie GymOps niet is
          </h2>
          <p className="text-dark-300 text-center mb-10">
            We zijn eerlijk: GymOps is niet voor iedereen de juiste keuze.
          </p>

          <div className="space-y-3 mb-10">
            {notFor.map((item, i) => (
              <div key={i} className="flex items-center gap-3 glass-card rounded-xl px-5 py-4">
                <svg className="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-dark-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-dark-400 text-center text-sm">
            Twijfel je? Plan een demo. We zeggen het je eerlijk als we denken dat het niet past.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Dit klinkt als jij?
          </h2>
          <p className="text-dark-300 text-lg mb-8">
            Dan is de eerste stap een gesprek. Geen verplichtingen, geen verkooppraatjes.
            Gewoon kijken of het klopt.
          </p>
          <Link href="/demo" className="btn-primary">
            Plan een gratis demo
          </Link>
        </div>
      </section>
    </div>
  );
}
