import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { href: '/flow', label: 'GymOps Flow' },
    { href: '/pulse', label: 'GymOps Pulse' },
    { href: '/prijzen', label: 'Prijzen' },
    { href: '/resultaten', label: 'Resultaten' },
  ];

  const companyLinks = [
    { href: '/voor-wie', label: 'Voor wie' },
    { href: '/demo', label: 'Plan een demo' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cinnabar rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Gym<span className="text-cinnabar">Ops</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed max-w-md mb-6">
              Het complete automatiseringssysteem voor micro gyms. Leads opvolgen,
              leden behouden en je staff aansturen — volledig op autopilot.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-cinnabar text-sm font-semibold hover:text-cinnabar-400 transition-colors"
            >
              Plan een gratis demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-xs">
            &copy; {currentYear} GymOps. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/31624658042"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-teal transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
