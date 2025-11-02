import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Beyond Checklists: Achieve{' '}
              <span className="text-cinnabar">Operational Excellence</span> in Your Gym
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Streamline your daily routines and empower your team – from opening & closing to coach feedback – with one easy app.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cinnabar-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Try GymOps Free
              </Link>
              <Link
                href="/#features"
                className="bg-white border-2 border-cinnabar text-cinnabar px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cinnabar hover:text-white transition-all shadow-md"
              >
                See How It Works
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-cinnabar">30 min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-verdigris">100%</div>
                <div className="text-sm text-gray-600">Mobile-First</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet">PWA</div>
                <div className="text-sm text-gray-600">No App Store</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cinnabar to-violet rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              {/* Mockup/Visual Representation */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-jonquil rounded"></div>
                    <span className="font-semibold">Opening Checklist</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-verdigris rounded flex items-center justify-center">✓</div>
                      <span>Turn on lights & music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-verdigris rounded flex items-center justify-center">✓</div>
                      <span>Check equipment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white/20 rounded"></div>
                      <span>Update whiteboard</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-jonquil rounded"></div>
                    <span className="font-semibold">Coach Feedback</span>
                  </div>
                  <p className="text-sm opacity-90">Real-time insights for management</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-jonquil rounded"></div>
                    <span className="font-semibold">Shift Handover</span>
                  </div>
                  <p className="text-sm opacity-90">Seamless communication between teams</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-jonquil rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-verdigris rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
