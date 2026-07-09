import Link from "next/link";
import {
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const footerLinks = {
  Products: [
    { label: "Zanari App", href: "/products/zanari-app" },
    { label: "ETFs", href: "/products/etfs" },
    { label: "Derivatives", href: "/products/derivatives" },

    // { label: "Asset Management", href: "/products/asset-management" },
    // { label: "Wealth Advisory", href: "/products/wealth-advisory" },
  ],
  "Who We Serve": [
    { label: "Individuals", href: "/who-we-serve/individuals" },
    { label: "Institutions", href: "/who-we-serve/institutions" },
    { label: "Diaspora", href: "/who-we-serve/diaspora" },
    // { label: "Advisors / IFAs", href: "/who-we-serve/advisors" },
  ],
  // Insights: [
  //   { label: "Market Reports", href: "/insights" },
  //   { label: "Newsletter", href: "/insights" },
  //   { label: "Glossary", href: "/insights" },
  // ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Partner With Us", href: "/partners" },
  ],
};

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacypolicy" },
  { label: "Cookie Policy", href: "/regulatory" },
  { label: "CMA Disclosures", href: "/regulatory" },
  { label: "Risk Disclosures", href: "/regulatory" },
];

export default function Footer() {
  return (
    <footer className="bg-[#063328] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 pb-16">
          <div className="lg:col-span-2 flex flex-col justify-between max-w-sm">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-bold text-xl tracking-tight">
                  Olkasis Capital
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Africa's wealth, invested wisely — from Nairobi to the world.
              </p>
            </div>

            <div className="flex gap-2.5">
              {[
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaXTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaTiktok, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-[#c9a84c] hover:border-[#c9a84c] transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col">
                <h4 className="font-semibold text-xs text-white/40 mb-4 uppercase tracking-widest">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-white/70 text-sm hover:text-[#c9a84c] transition-colors duration-150 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Regulatory Disclosures */}
        <div className="border-t border-white/10 pt-8 space-y-6">
          {/* Regulatory Badges & Compliance Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-2">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-[11px] text-white/50 leading-relaxed max-w-3xl">
              <span className="text-white/80 font-semibold block mb-0.5">
                Risk Disclosure
              </span>
              Investing involves risk, including the possible loss of capital.
              {/* Olkasis Capital is regulated by the Capital Markets Authority (CMA) Kenya. */}{" "}
              Past performance is not indicative of future results. All
              investments carry risk and may not be suitable for all investors.
            </div>

            {/* <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wide text-white/80 flex items-center gap-1.5">
                <span className="text-xs">🇰🇪</span> CMA Kenya Licensed
              </span>
              <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wide text-white/80">
                NSE Member
              </span>
            </div> */}
          </div>

          {/* Copyright and Inline Legal Index */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pt-2 border-t border-white/5 text-[11px] text-white/40">
            <p className="w-full lg:w-auto text-center lg:text-left">
              &copy; {new Date().getFullYear()} Olkasis Capital Ltd. All rights
              reserved.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
