// components/Footer.tsx
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Logo + tagline */}
        <div>
          <img
            src="logo.png" // replace with your actual logo in /public
            alt="Asido Foundation"
            className="h-10 mb-4"
          />
          <p className="text-sm mb-6">
            Making mental health support accessible through advocacy and action
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Thursday Tribune
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                IMCE Sessions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Book Campaign
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Unashamed Pledge
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="block">No 4, Awosika Street, Old Bodija, Ibadan.</span>
            </li>
            <li>
              <a href="mailto:asidofoundation@gmail.com" className="hover:underline">
                asidofoundation@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+2348180777458" className="hover:underline">
                +234 818 077 7458
              </a>
            </li>
            <li>
              <a href="tel:+2349028080416" className="hover:underline">
                +234 902 808 0416
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-600 py-6 text-center text-xs">
        © 2025 Asido Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
