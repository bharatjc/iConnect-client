import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="container pt-16 text-white">
        <div className="px-5 md:px-0 md:flex justify-between">
          <div className="mb-5">Sundhara, Kathmadu, Nepal</div>
          <div className="flex text-xl gap-5 mb-5">
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
            <FaTwitter />
            <FaTiktok />
          </div>
          <div className="flex items-center gap-2 mb-5">
            <FaPhoneAlt /> 01-5605545
          </div>
        </div>
        <hr />

        <div className="px-5 md:px-0 md:flex justify-between pt-10 pb-3 text-xl">
          <div className="mb-5">
            <h2 className="font-bold mb-3">Products</h2>
            <ul className="text-[12px] text-gray-300">
              <li>Payment Processing</li>
              <li>Staff Management</li>
              <li>Floor & Table Management</li>
              <li>Menu Management</li>
              <li>Online Ordering</li>
            </ul>
            </div>
          <div className="mb-5">
          <h2 className="font-bold mb-3">Integrations</h2>
          <ul className="text-[12px] text-gray-300">
            <li>Full Service Restaurant</li>
            <li>Fine Dining</li>
            <li>Bar & Club</li>
            <li>Brewery & Winery</li>
          </ul>
          </div>
          <div className="mb-5">
          <h2 className="font-bold mb-3">Resources</h2>
          <ul className="text-[12px] text-gray-300">
            <li>Blog</li>
            <li>QR Code Menu</li>
            <li>Tools</li>
            <li>Customer Hub</li>
            <li>Help Articles</li>
          </ul>
          </div>
          <div>
          <h2 className="font-bold mb-3">Company</h2>
          <ul className="text-[12px] text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Support</li>
            <li>Partner Program</li>
          </ul>
          </div>
        </div>
        <hr />

        <div className=" h-12 flex justify-center items-center text-[12px]">©2024<span className="text-red-400 mx-2">iConnect</span> NPL</div>
      </div>
    </div>
  );
}

export default Footer;
