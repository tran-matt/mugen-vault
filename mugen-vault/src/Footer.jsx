import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Social Media Links */}
          <div className="social-media mb-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="https://twitter.com/MugenVault" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="https://www.instagram.com/mugenvault" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info mb-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-1 text-center">
              <li>Email: mugenvault@gmail.com</li>
              <li>Phone: +1 202 579 9556</li>
              <li>College Park, Maryland</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Mugen Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
