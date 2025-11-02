export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah van der Berg',
      role: 'Owner',
      gym: 'CrossFit Amsterdam Central',
      quote:
        'GymOps transformed how we run our box. Before, important notes were lost on sticky notes or WhatsApp. Now everything is in one place, and my coaches always know what happened in the previous shift. Our consistency improved dramatically.',
      image: '👩',
      stats: {
        label: 'Time Saved',
        value: '2 hours/day',
      },
    },
    {
      name: 'Mike Jansen',
      role: 'Head Coach & Owner',
      gym: 'Boutique Strength Rotterdam',
      quote:
        "As a small boutique gym, we can't afford mistakes. GymOps keeps us professional and organized. The opening and closing checklists ensure nothing is missed, and I can finally track my coaches' development with the feedback feature.",
      image: '👨',
      stats: {
        label: 'Member Satisfaction',
        value: '↑ 45%',
      },
    },
    {
      name: 'Emma de Vries',
      role: 'Manager',
      gym: 'CrossFit Leiden',
      quote:
        'Setup took less than 30 minutes! We created our checklists, invited the team, and were up and running. The mobile-first design means coaches use it naturally on their phones. Best decision we made this year.',
      image: '👩',
      stats: {
        label: 'Setup Time',
        value: '< 30 min',
      },
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by CrossFit Boxes & Boutique Gyms
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how gym owners like you are achieving operational excellence with GymOps.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cinnabar to-violet rounded-full flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-cinnabar font-medium">
                    {testimonial.gym}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Stat */}
              <div className="bg-verdigris-50 rounded-lg p-4 border border-verdigris-100">
                <div className="text-sm text-verdigris-700 font-medium mb-1">
                  {testimonial.stats.label}
                </div>
                <div className="text-2xl font-bold text-verdigris">
                  {testimonial.stats.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cinnabar mb-2">50+</div>
            <div className="text-gray-600">Gyms Using GymOps</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-verdigris mb-2">97%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-violet mb-2">10k+</div>
            <div className="text-gray-600">Checklists Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-jonquil-700 mb-2">30 min</div>
            <div className="text-gray-600">Average Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}
