export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'We misten minstens 3 leads per week. Die tijd is voorbij.',
      name: 'Mark',
      role: 'Eigenaar CrossFit Rotterdam Noord',
      stat: '22% → 61%',
      statLabel: 'Leadconversie in 60 dagen',
    },
    {
      quote: 'Twee maanden na de start al 8 nieuwe leden direct uit de automatisering.',
      name: 'Lotte',
      role: 'Boutique studio Utrecht',
      stat: '8 leden',
      statLabel: 'In eerste twee maanden',
    },
    {
      quote: 'Mijn coaches werken eindelijk consistent. Ik hoef er niet meer achteraan.',
      name: 'Sander',
      role: 'Microgym Amsterdam',
      stat: '100%',
      statLabel: 'Shifts afgevinkt',
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Wat gym-eigenaren zeggen
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 flex flex-col">
              {/* Quote */}
              <div className="mb-6 flex-1">
                <svg className="w-8 h-8 text-cinnabar/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <blockquote className="text-white text-lg font-medium leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cinnabar to-teal flex items-center justify-center text-white font-heading font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{testimonial.name}</div>
                  <div className="text-dark-400 text-xs">{testimonial.role}</div>
                </div>
              </div>

              {/* Stat */}
              <div className="bg-teal/5 rounded-lg p-3 border border-teal/10">
                <div className="text-teal text-2xl font-heading font-bold">{testimonial.stat}</div>
                <div className="text-dark-400 text-xs">{testimonial.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
