import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCamera } from "react-icons/fa";
export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/simonecolli/", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/simone-colli-085683223/", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://instagram.com/colli_02", icon: <FaInstagram /> },
    { name: "Instagram photo", url: "https://www.instagram.com/__sc_photo__/", icon: <FaCamera /> },
    { name: "Email", url: "mailto:s.colli.dev@gmail.com", icon: <FaEnvelope /> }
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="tech-minimal-container">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simone Colli</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Computer Science student passionate about technology,
                and photography. Always learning, always creating.
              </p>
            </div>
            <div>

            </div>

            {/* Contact */}
            <div className="text-right">
              <h4 className="text-sm font-black mb-4 text-gray-900">Social & email</h4>
              <div className="flex gap-4 mt-4 justify-end">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all"
                    aria-label={link.name}
                  >
                    <span className="text-xs font-medium">
                        {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex justify-center items-center gap-4">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} Simone Colli. 
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
