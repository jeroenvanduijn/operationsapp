import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dienstverleningsovereenkomst — GymOps',
  description:
    'Teken de GymOps dienstverleningsovereenkomst om te starten met jouw gym automatisering.',
};

export default function OvereenkomstPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cinnabar/10 text-cinnabar border border-cinnabar/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cinnabar" />
            Laatste stap
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Dienstverlenings<span className="gradient-text">overeenkomst</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-xl mx-auto">
            Vul onderstaande overeenkomst in en onderteken digitaal. Na ondertekening starten we direct met de onboarding.
          </p>
        </div>
      </section>

      {/* Contract embed */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-2 overflow-hidden">
            <iframe
              title="GymOps Dienstverleningsovereenkomst"
              src="https://eu.jotform.com/sign/260706020795051/invite/01kkhswqqz373458b4f30109bd?signEmbed=1"
              style={{ height: '900px', width: '100%', border: 0 }}
              className="rounded-xl bg-white"
            />
          </div>
          <p className="text-dark-500 text-xs text-center mt-4">
            Na ondertekening ontvang je een bevestiging per e-mail.
          </p>
        </div>
      </section>
    </div>
  );
}
