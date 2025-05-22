const Footer = () => {
  return (
    <footer className="text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Nahom Gebre</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nahom Gebre. All rights reserved.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#services" className="hover:text-accent">Services</a></li>
            <li><a href="#resume" className="hover:text-accent">About</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: nahomgebre73@gmail.com</li>
            <li>Phone: +251 957 088 840</li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
