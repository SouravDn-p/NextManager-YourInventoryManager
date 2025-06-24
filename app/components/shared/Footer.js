import Link from "next/link";
import {
  Package,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                InventoryPro
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional inventory management solution designed to streamline
              your business operations and maximize efficiency with modern
              technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Inventory Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Stock Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Analytics & Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                >
                  Multi-user Access
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm">
                  support@inventrypro.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-green-600/20 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-purple-600/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-gray-400 text-sm">
                  123 Business St, Suite 100, City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2024 InventoryPro. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
