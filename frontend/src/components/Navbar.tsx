import React from "react";
import { Shield } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between liquid-glass rounded-full px-6 py-3 md:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
          <Shield className="w-5 h-5 text-purple-400 animate-pulse" />
          <span className="font-semibold tracking-wide text-white text-lg">
            SpamShield AI<span className="text-purple-400 font-bold">®</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#analyzer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Analytics
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#analyzer"
            className="text-xs md:text-sm font-semibold text-white bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 hover:bg-purple-600/40 hover:border-purple-500/60 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
