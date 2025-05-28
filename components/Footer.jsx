import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide text-accent">
            Nahom Gebre
          </h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nahom Gebre. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "About", href: "#resume" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdEmail className="text-accent" /> nahomgebre73@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-accent" /> +251 957 088 840
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-accent" /> Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 text-center space-x-6 text-xl">
        <a href="https://github.com/nahomgebre57" target="_blank" rel="noopener noreferrer">
          <FaGithub className="inline-block hover:text-accent transition" />
        </a>
        <a href="https://www.linkedin.com/in/nahomgebre73" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="inline-block hover:text-accent transition" />
        </a>
          <a href="mailto:nahomgebre73@gmail.com">
    <FaEnvelope className="inline-block hover:text-accent transition" />
  </a>
      </div>
    </footer>
  );
};

export default Footer;
