'use client'
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
         
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Univent</span>
              <span className="text-orange-500">.</span>
            </h3>
            <p className="text-gray-400">
              Connecting students with campus events across universities. One platform for all college activities.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Instagram
              </a>
            </div>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Partner Colleges
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="hover:text-orange-500 transition-colors">
                  123 University Avenue, Campus Town
                </p>
              </div>
              <div>
                <p className="hover:text-orange-500 transition-colors">
                  Phone: +1 (555) 123-4567
                </p>
              </div>
              <div>
                <p className="hover:text-orange-500 transition-colors">
                  Email: info@Univent.com
                </p>
              </div>
            </div>
          </div>

         
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe for event updates in your area
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
        <div className="border-t border-gray-800 my-8"></div>

        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            &copy; {currentYear} Univent. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-orange-500 transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-orange-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;