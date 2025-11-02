'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gym: '',
    message: '',
    interest: 'trial',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        gym: '',
        message: '',
        interest: 'trial',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Get Started
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your gym's operations? Fill out the form below and we'll get you started with GymOps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Request Free Demo or Trial
            </h2>

            {submitted ? (
              <div className="bg-verdigris-50 border border-verdigris-200 rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-verdigris-700 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-700">
                  We've received your request and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-cinnabar transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-cinnabar transition-colors"
                    placeholder="john@yourgym.com"
                  />
                </div>

                {/* Gym Name */}
                <div>
                  <label htmlFor="gym" className="block text-sm font-medium text-gray-700 mb-2">
                    Gym Name *
                  </label>
                  <input
                    type="text"
                    id="gym"
                    name="gym"
                    required
                    value={formData.gym}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-cinnabar transition-colors"
                    placeholder="CrossFit Your City"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-cinnabar transition-colors"
                  >
                    <option value="trial">Free Trial</option>
                    <option value="demo">Book a Demo</option>
                    <option value="info">More Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnabar focus:border-cinnabar transition-colors resize-none"
                    placeholder="Tell us about your gym and what you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cinnabar-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Started with GymOps'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  No credit card required • Free trial available • We'll respond within 24 hours
                </p>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cinnabar-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cinnabar text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:hello@gymops.app" className="text-cinnabar hover:underline">
                      hello@gymops.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Snippet */}
            <div className="bg-gradient-to-br from-cinnabar to-violet rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Is there a free trial?</h4>
                  <p className="text-white/90 text-sm">
                    Yes! We offer a free trial so you can experience GymOps risk-free.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How long does setup take?</h4>
                  <p className="text-white/90 text-sm">
                    Most gyms are up and running in under 30 minutes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do I need to download an app?</h4>
                  <p className="text-white/90 text-sm">
                    No! GymOps is a PWA that works in your browser on any device.
                  </p>
                </div>
              </div>
              <a
                href="/faq"
                className="inline-block mt-6 text-white underline hover:text-jonquil transition-colors"
              >
                View all FAQs →
              </a>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Why GymOps?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-medium text-gray-700">30-Min Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">☁️</div>
                  <div className="text-sm font-medium text-gray-700">Cloud-Based</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-sm font-medium text-gray-700">Mobile-First</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="text-sm font-medium text-gray-700">Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
