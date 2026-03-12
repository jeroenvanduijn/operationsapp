'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/flow', label: 'Flow' },
    { href: '/pulse', label: 'Pulse' },
    { href: '/prijzen', label: 'Prijzen' },
    { href: '/voor-wie', label: 'Voor wie' },
    { href: '/resultaten', label: 'Resultaten' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-cinnabar rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-heading font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-heading font-bold text-white">
              Gym<span className="text-cinnabar">Ops</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="px-6 py-2.5 bg-cinnabar text-white text-sm font-semibold rounded-lg hover:bg-cinnabar-600 transition-all hover:shadow-lg hover:shadow-cinnabar/25"
            >
              Plan een demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-dark-300 hover:text-white focus:outline-none p-2"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/[0.06]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-dark-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/[0.06]">
              <Link
                href="/demo"
                className="block text-center px-6 py-3 bg-cinnabar text-white rounded-lg font-semibold hover:bg-cinnabar-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan een demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
