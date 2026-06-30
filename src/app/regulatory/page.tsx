import { Shield, FileText, AlertTriangle } from "lucide-react";
import Link from 'next/link';
export const metadata = { title: "Regulatory & Compliance — Olkasis Capital" };

export default function RegulatoryPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Regulatory &amp;<br /><span className="text-[#c9a84c]">Compliance</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">We operate under the highest regulatory standards in Kenya and internationally.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-10">Our Licences &amp; Registrations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Shield, title: "CMA Kenya", desc: "Licensing by the Capital Markets Authority of Kenya.", badge: "In Progress" },
              { Icon: Shield, title: "NSE Member", desc: "Registering as member of the Nairobi Securities Exchange.", badge: "In Progress" },
              { Icon: Shield, title: "CDSC", desc: "All securities shall be held in client-segregated CDSC accounts.", badge: "In Progress" },
            ].map(({ Icon, title, desc, badge }) => (
              <div key={title} className="bg-[#f8f5ef] rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-[#0a4f3c]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0a4f3c]" />
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">{badge}</span>
                </div>
                <h3 className="font-bold text-[#063328] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-7 h-7 text-amber-600" />
            <h2 className="text-3xl font-bold text-[#0a4f3c]">Risk Disclosures</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
            <p className="text-amber-800 font-semibold mb-2">Important: Capital at risk</p>
            <p className="text-amber-700 text-sm leading-relaxed">Investing involves risk, including the possible loss of the principal amount invested. Past performance is not indicative of future results.</p>
          </div>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>Investment products offered by Olkasis Capital are not bank deposits and are not guaranteed by any government deposit protection scheme.</p>
            <p>Before investing, you should carefully consider your investment objectives, risk tolerance, time horizon, and liquidity needs. If in doubt, seek independent financial advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-7 h-7 text-[#0a4f3c]" />
            <h2 className="text-3xl font-bold text-[#0a4f3c]">AML / KYC Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>Olkasis Capital is fully compliant with Kenya&apos;s Proceeds of Crime and Anti-Money Laundering Act (POCAMLA) and guidelines from the Financial Reporting Centre (FRC).</p>
            <p>All customers must complete KYC verification before transacting. This includes proof of identity, proof of address, and source of funds declaration for investments above KES 1,000,000.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-8">Privacy Policy</h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-10">
            <p>Olkasis Capital processes personal data in accordance with Kenya&apos;s Data Protection Act 2019 and the EU GDPR where applicable. We do not sell your personal data to third parties.</p>
            <p>Contact our Data Protection Officer at privacy@olkasiscapital.com to access, correct, or delete your data.</p>
            <p>More on <Link href= "/privacypolicy">Privacy Policy</Link></p>
          </div>
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">Terms of Service</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-600 text-sm">
            <li>Eligibility: You must be 18+ and legally permitted to invest in your jurisdiction</li>
            <li>Governing law: These terms are governed by the laws of Kenya</li>
            <li>Dispute resolution: Nairobi Centre for International Arbitration rules apply</li>
            <li>More on <Link href= "/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
