import React from 'react';
import logo from '../assets/images/logo.png';
import item1 from '../assets/images/footer1.jpg';
import item2 from '../assets/images/footer2.jpg';
import item3 from '../assets/images/footer3.jpg';
import item4 from '../assets/images/footer4.jpg';
import item5 from '../assets/images/footer5.jpg';
import item6 from '../assets/images/footer6.jpg';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#222] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logo} alt="Company Logo" height={55} width={55} className="mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui a maiores nemo, inventore non porro
            distinctio, cum et corrupti velit aut?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#shop" className="hover:underline">Shop</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Our Gallery */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            <img src={item1} alt="Item 1" className="w-full h-20 object-cover rounded-md" />
            <img src={item2} alt="Item 2" className="w-full h-20 object-cover rounded-md" />
            <img src={item3} alt="Item 3" className="w-full h-20 object-cover rounded-md" />
            <img src={item4} alt="Item 4" className="w-full h-20 object-cover rounded-md" />
            <img src={item5} alt="Item 5" className="w-full h-20 object-cover rounded-md" />
            <img src={item6} alt="Item 6" className="w-full h-20 object-cover rounded-md" />
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            <strong>T:</strong> +123 456 789<br />
            <strong>E:</strong> info@yoursite.com<br />
            <strong>A:</strong> SRMIST,RMP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
