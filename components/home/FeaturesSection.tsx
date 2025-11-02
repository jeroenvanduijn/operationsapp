export default function FeaturesSection() {
  const features = [
    {
      id: 'consistency',
      title: 'Consistency & Routines',
      description:
        'Standardized opening and closing procedures ensure a better, consistent member experience. GymOps creates a sense of order and structure that both staff and members appreciate. No more guessing or forgetting critical steps – every shift runs like clockwork.',
      icon: '🎯',
      benefits: [
        'Standardized procedures for every shift',
        'Nothing gets forgotten or missed',
        'Professional, reliable member experience',
        'Reduced stress for your team',
      ],
      color: 'cinnabar',
    },
    {
      id: 'communication',
      title: 'Shift Communication',
      description:
        'GymOps simplifies handovers between shifts. Important information never gets lost when coaches change, ensuring continuity in your operations. Morning coaches can leave notes for evening staff, incidents are logged and visible to everyone who needs to know.',
      icon: '🔄',
      benefits: [
        'Seamless shift handovers',
        'Centralized communication hub',
        'No lost information between teams',
        'Complete operational continuity',
      ],
      color: 'verdigris',
    },
    {
      id: 'feedback',
      title: 'Coach Feedback & Development',
      description:
        'Capture feedback for coaches after every shift. Managers can leave notes, highlight wins, and identify areas for growth. This fosters a culture of continuous improvement – staff members feel supported and know exactly where they stand.',
      icon: '📝',
      benefits: [
        'Structured feedback after each shift',
        'Track coach development over time',
        'Build a culture of improvement',
        'Prevent small issues from escalating',
      ],
      color: 'violet',
    },
    {
      id: 'insights',
      title: 'Management Insights',
      description:
        'Owners and managers get real-time visibility into daily operations. See at a glance which tasks are completed, what incidents occurred, and where your attention is needed. Make data-driven decisions to improve your gym operations.',
      icon: '📊',
      benefits: [
        'Real-time operational overview',
        'Track completion rates and trends',
        'Identify recurring issues quickly',
        'Make informed management decisions',
      ],
      color: 'jonquil',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; accent: string }> = {
    cinnabar: { bg: 'bg-cinnabar-50', text: 'text-cinnabar-700', accent: 'bg-cinnabar' },
    verdigris: { bg: 'bg-verdigris-50', text: 'text-verdigris-700', accent: 'bg-verdigris' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-700', accent: 'bg-violet' },
    jonquil: { bg: 'bg-jonquil-50', text: 'text-jonquil-700', accent: 'bg-jonquil' },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Operational Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            GymOps provides everything you need to streamline daily operations and elevate your gym management.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Feature Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text} rounded-xl text-3xl mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 ${colorClasses[feature.color].accent} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div
                  className={`${colorClasses[feature.color].bg} rounded-2xl p-8 shadow-lg border-2 ${colorClasses[feature.color].text} border-opacity-20`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b">
                        <div className={`w-3 h-3 ${colorClasses[feature.color].accent} rounded-full`}></div>
                        <div className={`w-3 h-3 ${colorClasses[feature.color].accent} rounded-full opacity-60`}></div>
                        <div className={`w-3 h-3 ${colorClasses[feature.color].accent} rounded-full opacity-30`}></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="pt-4 space-y-2">
                        <div className={`h-8 ${colorClasses[feature.color].bg} rounded flex items-center px-3`}>
                          <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                        </div>
                        <div className={`h-8 ${colorClasses[feature.color].bg} rounded flex items-center px-3`}>
                          <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
