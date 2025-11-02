import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cinnabar to-violet">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Elevate Your Gym's Operations?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join gym owners who have streamlined their operations and empowered their teams with GymOps. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Try GymOps Free
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cinnabar transition-all"
          >
            Book a Demo
          </Link>
        </div>

        <p className="mt-6 text-white/80 text-sm">
          Still have questions?{' '}
          <Link href="/faq" className="underline hover:text-white">
            Check our FAQ
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="underline hover:text-white">
            contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
