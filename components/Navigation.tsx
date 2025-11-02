'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-cinnabar">
              GymOps
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-cinnabar transition-colors">
              Features
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-cinnabar transition-colors">
              Use Cases
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-cinnabar transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cinnabar transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-cinnabar text-white px-6 py-2 rounded-lg font-semibold hover:bg-cinnabar-600 transition-colors"
            >
              Try GymOps Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-cinnabar focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#features"
                className="text-gray-700 hover:text-cinnabar transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-700 hover:text-cinnabar transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-cinnabar transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-cinnabar transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-cinnabar text-white px-6 py-2 rounded-lg font-semibold hover:bg-cinnabar-600 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try GymOps Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
