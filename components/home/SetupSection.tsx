import Link from 'next/link';

export default function SetupSection() {
  const steps = [
    {
      number: '1',
      title: 'Create Your Account',
      description:
        'Sign up in seconds – no credit card required. Access GymOps instantly from any device via your web browser.',
      icon: '🚀',
    },
    {
      number: '2',
      title: 'Build Your Checklists',
      description:
        "Create opening/closing routines and custom checklists that match your gym's operations. Takes just minutes to set up.",
      icon: '📋',
    },
    {
      number: '3',
      title: 'Invite Your Team',
      description:
        'Add your coaches and staff with a simple invite link. They can start using GymOps immediately on their phones.',
      icon: '👥',
    },
    {
      number: '4',
      title: 'Start Running Smoother',
      description:
        "That's it! Your gym operations are now streamlined. Focus on coaching while GymOps handles the rest.",
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in Under 30 Minutes
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GymOps is a Progressive Web App (PWA) – no app store hassle, works on any device via your browser. Mobile-first design for coaches on the go.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-cinnabar mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cinnabar text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why Progressive Web App (PWA)?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">No Installation Required</h4>
              <p className="text-gray-300 text-sm">
                Access instantly via web browser – no waiting for app store approvals or downloads.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="font-semibold mb-2">Cloud-Based & Secure</h4>
              <p className="text-gray-300 text-sm">
                Your data is automatically backed up and synced across all devices. Always up-to-date.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-semibold mb-2">Works Everywhere</h4>
              <p className="text-gray-300 text-sm">
                Desktop, tablet, or phone – iOS or Android. One app that works on any device.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-cinnabar text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cinnabar-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started in 30 Minutes
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            No credit card required • Free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
