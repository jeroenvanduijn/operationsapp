import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cinnabar mb-4">GymOps</h3>
            <p className="text-gray-400 mb-4">
              Beyond Checklists: Achieve Operational Excellence in Your Gym.
            </p>
            <p className="text-gray-400 text-sm">
              Streamline your daily routines and empower your team with the operations app designed for CrossFit and boutique gyms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-cinnabar transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-cinnabar transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-cinnabar transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cinnabar transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-cinnabar transition-colors">
                  Request a Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cinnabar transition-colors">
                  Try for Free
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GymOps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
