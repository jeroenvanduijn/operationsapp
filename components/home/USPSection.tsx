export default function USPSection() {
  const usps = [
    {
      icon: '⚡',
      title: 'Save Time, Every Day',
      description:
        'GymOps automates routine checks, so your staff spends less time on admin and more time coaching. Focus on what matters most.',
      color: 'jonquil',
    },
    {
      icon: '✓',
      title: 'Consistency in Every Routine',
      description:
        'Every shift follows the same standard, so nothing gets missed. Deliver consistent quality that members experience as professional and reliable.',
      color: 'verdigris',
    },
    {
      icon: '💬',
      title: 'Clear Communication Between Coaches',
      description:
        'Shift handovers are seamless via GymOps. All important notes and incidents are centralized, eliminating miscommunication and keeping operations safe and effective.',
      color: 'violet',
    },
    {
      icon: '📈',
      title: 'Feedback that Fuels Improvement',
      description:
        'GymOps provides a place to capture coach feedback after every shift. Foster a culture of continuous improvement – your team knows where they stand and feels supported to grow.',
      color: 'cinnabar',
    },
    {
      icon: '👁️',
      title: 'Real-time Insights for Management',
      description:
        'Owners and managers can see at a glance if all checks are done and which incidents have been reported. Real-time visibility makes it easier to address problems quickly and refine processes.',
      color: 'jonquil',
    },
  ];

  const colorClasses: Record<string, string> = {
    jonquil: 'bg-jonquil-50 text-jonquil-700',
    verdigris: 'bg-verdigris-50 text-verdigris-700',
    violet: 'bg-violet-50 text-violet-700',
    cinnabar: 'bg-cinnabar-50 text-cinnabar-700',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why GymOps?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            More than a checklist app – GymOps is your complete operations partner designed specifically for CrossFit and boutique gyms.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-lg ${colorClasses[usp.color]} flex items-center justify-center text-2xl mb-4`}
              >
                {usp.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {usp.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
