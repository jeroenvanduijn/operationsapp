import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cinnabar/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-cinnabar rounded-full animate-pulse" />
            <span className="text-xs font-medium text-dark-300 uppercase tracking-wider">
              GymOps — Automatisering voor micro gyms
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 animate-fade-in-up delay-100">
            Jouw gym verdient een systeem dat voor je werkt
            <span className="text-cinnabar"> — ook als jij coacht.</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Leads automatisch opvolgen. Leden behouden voor ze afhaken.
            Handgeschreven kaarten versturen in 15 seconden. Google Reviews
            automatisch boosten. Staff aansturen zonder WhatsApp-chaos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/demo" className="btn-primary">
              Plan een gratis demo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/flow" className="btn-secondary">
              Bekijk het platform
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 justify-center animate-fade-in-up delay-500">
            <div className="flex items-center gap-2 text-dark-400 text-sm">
              <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Geen setupkosten
            </div>
            <div className="flex items-center gap-2 text-dark-400 text-sm">
              <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Custom website inbegrepen
            </div>
            <div className="flex items-center gap-2 text-dark-400 text-sm">
              <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Sportbit-integratie
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
