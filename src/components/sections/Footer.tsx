import { Instagram, Phone, Mail } from "lucide-react";

interface FooterProps {
  onNavigateHome: () => void;
  onSelectProject: (id: string) => void;
}

export function Footer({ onNavigateHome, onSelectProject }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else {
      onNavigateHome();
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#030408]/75 backdrop-blur-md text-neutral-300 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid from Figma */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          {/* Left: Brand & Thanks */}
          <div className="md:col-span-5 space-y-3 text-left">
            <h3 className="font-akira text-2xl sm:text-3xl font-black tracking-wider text-white">
              JAMALISM
            </h3>
            <p className="text-sm text-neutral-400 font-normal">
              Thank you for visiting !
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    onNavigateHome();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-white transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("projects-section")}
                  className="hover:text-white transition cursor-pointer"
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("about-section")}
                  className="hover:text-white transition cursor-pointer"
                >
                  What i've Build
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("testimonials-section")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Review
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Contact Information */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-sm font-semibold text-white tracking-wider">
              Contact Information
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-neutral-300" />
                <a
                  href="https://instagram.com/mr_jamaaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  @mr_jamaaal &mdash; @llamaaaj
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-300" />
                <a
                  href="tel:082146943003"
                  className="hover:text-white transition"
                >
                  082-1469-43003
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-300" />
                <a
                  href="mailto:rizalzmlps1@gmail.com"
                  className="hover:text-white transition"
                >
                  rizalzmlps1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <p>&copy; 2026, Jamalism. &mdash; All rights reserved.</p>
          <p className="text-neutral-400">
            Bali, Indonesia &bull; WITA (UTC+8)
          </p>
        </div>
      </div>
    </footer>
  );
}
