"use client";
import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, Github, Linkedin } from "lucide-react";

const links = ["Shop", "Lookbook", "Journal", "Contact"];

const socials = [
  {
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/krishkracksup/?igsh=M2lrZ3R0bTJkamlj#",
  },
  { icon: <Twitter size={18} />, href: "https://x.com/KrishJainw" },
  { icon: <Mail size={18} />, href: "mailto:krishjain.w@gmail.com" },
  { icon: <Github size={18} />, href: "https://github.com/KrishCodesw" },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/krish-jain-445aa332a/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 text-center">
      <div className="mb-6 flex justify-center gap-6 flex-wrap">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-neutral-400 hover:text-white transition-all duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="mb-6 flex justify-center gap-6">
        {socials.map(({ icon, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            whileHover={{ scale: 1.2, color: "#fff" }}
            transition={{ duration: 0.2 }}
            className="text-neutral-500 hover:text-white"
          >
            {icon}
          </motion.a>
        ))}
      </div>

      <p className="text-neutral-500 text-sm italic">“Wear the moment.”</p>
    </footer>
  );
};

export default Footer;
