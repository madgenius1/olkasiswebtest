import Link from "next/link";
import {
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const footerLinks = {
  Products: [
    { label: "Olkasis App", href: "/products/zanari" },
    { label: "ETFs", href: "/products/etfs" },
    { label: "Asset Management", href: "/products/asset-management" },
    { label: "Wealth Advisory", href: "/products/wealth-advisory" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Partner With Us", href: "/partners" },
  ],
  "Who We Serve": [
    { label: "Individuals", href: "/who-we-serve/individuals" },
    { label: "Institutions", href: "/who-we-serve/institutions" },
    { label: "Diaspora", href: "/who-we-serve/diaspora" },
    { label: "Advisors / IFAs", href: "/who-we-serve/advisors" },
  ],
  Insights: [
    { label: "Market Reports", href: "/insights" },
    // { label: "Blog", href: "/insights" },
    { label: "Newsletter", href: "/insights" },
    { label: "Glossary", href: "/insights" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/regulatory" },
    { label: "Privacy Policy", href: "/regulatory" },
    { label: "Cookie Policy", href: "/regulatory" },
    { label: "CMA Disclosures", href: "/regulatory" },
    { label: "Risk Disclosures", href: "/regulatory" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#063328] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c9a84c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-lg">Olkasis Capital</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Africa's wealth, invested wisely — from Nairobi to the world.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaXTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaTiktok, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a84c] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-semibold text-sm text-white/80 mb-3 uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="bg-white/5 rounded-xl p-4 mb-6 text-xs text-white/50 leading-relaxed">
            <strong className="text-white/70">Risk Disclosure:</strong>{" "}
            Investing involves risk, including the possible loss of capital.
            {/* Olkasis Capital is regulated by the Capital Markets Authority (CMA)
            Kenya. Past performance is not indicative of future results. All */}
            investments carry risk and may not be suitable for all investors.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Olkasis Capital Ltd. All rights reserved.
              {/*  CMA Kenya Licensed. */}
            </p>
            {/* <div className="flex items-center gap-4">
              <span className="bg-white/10 px-3 py-1 rounded-full">
                🇰🇪 CMA Kenya
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full">
                NSE Member
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
