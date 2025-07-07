import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a090a] text-white py-8 px-4 px">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Responsive Columns */}
        <div className=" flex justify-center ">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
          {/* Brand Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-bold mb-4">School Master Store</h3>
            <p className="text-sm text-[#D1D5DB] mb-4">
              Quality school uniforms for Sri Lankan students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  School Uniforms
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
              <Instagram className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
              <MessageCircle className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
            </div>
          </div>
          </div>
        </div>

        {/* Full Width Border Line & Bottom Text */}
        <div className="w-full border-t border-[#2c2c2c] mt-8">
          <div className="max-w-7xl mx-auto pt-8 text-center px-4">
            
            <p className="text-sm text-[#D1D5DB]">
              2025 © All Rights Reserved | School Master Store | Designed & Developed by{" "}
              <a
                href="https://everefficient.lk/"
                
                className="hover:underline "
              >
                EVER EFFICIENT Business Management (Pvt) Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
