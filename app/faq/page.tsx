'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What is GymOps?',
          a: "GymOps is a Progressive Web App that serves as your digital operations assistant. It streamlines daily tasks like opening/closing routines, staff handovers, and incident logging into one easy tool – helping your team stay consistent and efficient. It's designed specifically for CrossFit boxes and boutique gyms.",
        },
        {
          q: 'How is GymOps different from a regular checklist app?',
          a: 'GymOps goes beyond simple checklists. While it includes checklist functionality, it also provides shift communication tools, coach feedback features, management dashboards, and incident reporting – all designed specifically for gym operations. It\'s about achieving operational excellence, not just ticking boxes.',
        },
        {
          q: 'Is there a free trial?',
          a: 'Yes! We offer a free trial so you can experience GymOps risk-free. No credit card required to start. You can test all features and see how GymOps improves your gym operations before committing.',
        },
        {
          q: 'How long does setup take?',
          a: 'Most gyms are up and running in under 30 minutes. Simply create your account, build your checklists (or use our templates), invite your team, and start using GymOps. Our intuitive interface makes setup quick and painless.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What is a Progressive Web App (PWA)?',
          a: 'A PWA is a modern web application that works like a native app but runs in your browser. This means no installation from app stores, instant updates, and it works on any device (iOS, Android, desktop) – just open it in your browser. GymOps can be added to your home screen for quick access.',
        },
        {
          q: 'Does GymOps work on my phone?',
          a: 'Yes! GymOps is built mobile-first and works on any smartphone (iPhone or Android), tablet, or desktop computer. As long as you have a modern web browser, you can use GymOps.',
        },
        {
          q: 'Do I need to download an app?',
          a: 'No app download required! GymOps works directly in your web browser. However, you can add it to your home screen for quick access, and it will behave like a native app.',
        },
        {
          q: 'Is my data secure?',
          a: 'Absolutely. GymOps is cloud-based with industry-standard security measures. Your data is encrypted, automatically backed up, and accessible only to your authorized team members. We take data privacy and security very seriously.',
        },
        {
          q: 'What happens if I lose internet connection?',
          a: 'GymOps is designed to work offline. You can complete checklists and add notes without an internet connection. Once you\'re back online, everything syncs automatically.',
        },
      ],
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          q: 'Can I customize the checklists?',
          a: 'Yes! You can create fully customized checklists that match your gym\'s specific routines and procedures. Add, remove, or edit tasks as needed. We also provide templates to help you get started quickly.',
        },
        {
          q: 'How does shift communication work?',
          a: 'GymOps provides a centralized place for shift handovers. Coaches can leave notes for the next shift, log incidents, and communicate important information. Everything is timestamped and visible to the relevant team members, ensuring nothing gets lost.',
        },
        {
          q: 'Can I track multiple locations?',
          a: 'Yes! GymOps supports multiple gym locations under one account. You can view operations across all your gyms from a single dashboard.',
        },
        {
          q: 'What kind of reports can I generate?',
          a: 'Management can view real-time completion rates, track incidents over time, monitor coach performance, and identify recurring issues. The dashboard provides insights that help you make data-driven decisions to improve operations.',
        },
        {
          q: 'Can I give different permissions to different team members?',
          a: 'Yes! GymOps has role-based permissions. You can set different access levels for owners, managers, and coaches – ensuring everyone sees what they need without overwhelming them.',
        },
      ],
    },
    {
      category: 'Pricing & Support',
      questions: [
        {
          q: 'How much does GymOps cost?',
          a: 'Pricing varies based on your gym size and needs. Contact us for a custom quote. We offer flexible pricing plans for single gyms and multi-location operations. Start with our free trial to see the value first.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes, there are no long-term contracts. You can cancel your subscription at any time. We believe in earning your business every month by delivering value.',
        },
        {
          q: 'Do you offer customer support?',
          a: 'Absolutely! We provide email support to all customers, and our team is dedicated to helping you get the most out of GymOps. We typically respond within 24 hours.',
        },
        {
          q: 'Can I request new features?',
          a: 'Yes! We actively listen to our customers and continuously improve GymOps based on feedback. If you have a feature request, we\'d love to hear it.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about GymOps. Can't find what you're looking for?{' '}
            <Link href="/contact" className="text-cinnabar hover:underline">
              Contact us
            </Link>
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-cinnabar rounded"></span>
              {category.category}
            </h2>

            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const globalIndex = faqs
                  .slice(0, categoryIndex)
                  .reduce((acc, cat) => acc + cat.questions.length, 0) + questionIndex;

                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-cinnabar transform transition-transform flex-shrink-0 ${
                          openIndex === globalIndex ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    {openIndex === globalIndex && (
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cinnabar to-violet rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's talk! We're here to help you understand how GymOps can transform your gym operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cinnabar px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
