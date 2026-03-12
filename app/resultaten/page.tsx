import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resultaten — Wat GymOps oplevert in de praktijk',
  description:
    'Concrete resultaten van gym-eigenaren die met GymOps werken. Van hogere leadconversie tot operationele consistentie.',
};

export default function ResultatenPage() {
  const testimonials = [
    {
      quote: 'We misten minstens 3 leads per week. Dat is nu verleden tijd.',
      story:
        'Mark runde zijn CrossFit box al 4 jaar. De leads kwamen binnen via Instagram, maar de opvolging was chaotisch. Na GymOps Flow steeg zijn conversie van leads naar proefles van 22% naar 61% in 60 dagen.',
      name: 'Mark',
      role: 'CrossFit Rotterdam Noord',
      stat: '22% → 61%',
      statLabel: 'Leadconversie in 60 dagen',
    },
    {
      quote: '8 nieuwe leden in de eerste twee maanden, puur uit de automatisering.',
      story:
        'Lotte deed alles handmatig — Instagram, DMs, follow-ups. 6-8 uur per week. Na GymOps Flow liep alles automatisch. Die tijd stak ze in haar lessen.',
      name: 'Lotte',
      role: 'Boutique studio Utrecht',
      stat: '8 leden',
      statLabel: 'In eerste twee maanden',
    },
    {
      quote: 'Mijn coaches werken nu consistent. Ik hoef er niet meer achteraan.',
      story:
        'Sander had drie coaches in dienst. Iedereen deed het net even anders. Na GymOps Pulse: elke shift afgevinkt, elke handover gelogd, alles live op zijn telefoon.',
      name: 'Sander',
      role: 'Microgym Amsterdam',
      stat: '100%',
      statLabel: 'Shifts consistent afgevinkt',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Wat GymOps oplevert <span className="gradient-text">in de praktijk.</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Geen mooiweerpraatjes. Concrete resultaten van gym-eigenaren die met GymOps werken.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 items-center">
                  <div>
                    <blockquote className="text-white text-xl md:text-2xl font-heading font-semibold leading-snug mb-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="text-dark-400 text-sm leading-relaxed mb-6">
                      {testimonial.story}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cinnabar to-teal flex items-center justify-center text-white font-heading font-bold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">— {testimonial.name}</div>
                        <div className="text-dark-500 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal/5 rounded-xl p-5 border border-teal/10 text-center">
                    <div className="text-teal text-3xl font-heading font-bold">{testimonial.stat}</div>
                    <div className="text-dark-400 text-xs mt-1">{testimonial.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics placeholder */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            In getallen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '—', label: 'Gyms actief met GymOps' },
              { value: '—', label: 'Hogere leadconversie na 90 dagen' },
              { value: '—', label: 'Minder churn met retentieautomatisering' },
              { value: '—', label: 'Besparing uur/week voor eigenaar' },
            ].map((metric, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-heading font-bold text-cinnabar mb-2">{metric.value}</div>
                <div className="text-dark-400 text-xs">{metric.label}</div>
              </div>
            ))}
          </div>
          <p className="text-dark-500 text-xs text-center mt-6">
            Metrics worden bijgewerkt zodra data beschikbaar is.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Word het volgende succesverhaal.
          </h2>
          <p className="text-dark-300 text-lg mb-8">
            Plan een gratis demo en ontdek wat GymOps voor jouw gym kan betekenen.
          </p>
          <Link href="/demo" className="btn-primary">
            Plan een gratis demo
          </Link>
        </div>
      </section>
    </div>
  );
}
