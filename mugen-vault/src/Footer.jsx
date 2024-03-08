import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Social Media Links */}
        <div className="social-media mb-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="https://twitter.com/MugenVault" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="https://www.instagram.com/mugenvault" className="hover:text-gray-300">Instagram</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info mb-4">
          <h3 className="text-lg font-semibold text-right">Contact Us</h3>
          <ul>
            <li>Email: mugenvault@gmail.com</li>
            <li>Phone: +1 202 579 9556</li>
            <li>College Park, Maryland</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Mugen Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
