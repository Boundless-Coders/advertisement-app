import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-300">About us</Link></li>
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              <li><Link to="/ads" className="hover:text-green-300">Ads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Buro, Osu-Accra</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>(+233) 712-344-345</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>boundlesscoders@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white- text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved / with{' '}
            <Heart size={16} className="inline text-red-500 " /> by Boundless Coders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;