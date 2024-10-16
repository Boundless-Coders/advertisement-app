import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container  flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Navigations</h3>
          <ul className="list-none">
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/ads" className="hover:underline">Ads</a>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="list-none">
            <li>Location: Buro, Osu-Accra</li>
            <li>Phone: (+233) 456-789061</li>
            <li>Email: boundlesscoders@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4 border-t border-gray-700 pt-2 text-xs">
        <p>Copyright © 2024 All rights reserved <span className="text-red-500">♥</span> by Boundless Coders</p>
      </div>
    </footer>
  );
};

export default Footer;
