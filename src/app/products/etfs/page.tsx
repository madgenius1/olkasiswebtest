import Link from "next/link";
import { BarChart3, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "ETFs — Olkasis Capital" };

export default function ETFsPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">ETFs.<br /><span className="text-[#c9a84c]">Diversify across Africa.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Low-cost, diversified exposure to African and global markets — available via Zanari or direct investment.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4">What is an ETF?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            An Exchange-Traded Fund (ETF) is a basket of securities that trades on a stock exchange like a single share. Instead of buying one company, you buy a slice of many. ETFs are cheaper than unit trusts, more transparent, and trade in real time.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { Icon: BarChart3, title: "Instant diversification", desc: "One ETF can hold dozens of securities across sectors and geographies." },
              { Icon: Shield, title: "Lower costs", desc: "ETF expense ratios are typically 0.15%–0.35% p.a. — far below traditional unit trusts." },
              { Icon: TrendingUp, title: "Real-time trading", desc: "Buy and sell during NSE trading hours, just like a stock." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-[#f8f5ef] rounded-2xl p-6">
                <Icon className="w-8 h-8 text-[#0a4f3c] mb-3" />
                <h3 className="font-bold text-[#063328] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-8">ETFs vs. Unit Trusts</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a4f3c] text-white">
                  <th className="text-left px-6 py-4">Feature</th>
                  <th className="text-center px-6 py-4">Olkasis ETFs</th>
                  <th className="text-center px-6 py-4">Unit Trusts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Annual fee", "0.15% – 0.35%", "1.5% – 3.0%"],
                  ["Minimum investment", "KES 100", "KES 1,000 – 50,000"],
                  ["Trading", "Real-time (NSE hours)", "Once per day"],
                  ["Transparency", "Holdings published daily", "Monthly reporting"],
                  ["Liquidity", "High (sell any time)", "T+3 redemption"],
                ].map(([feat, etf, ut]) => (
                  <tr key={feat} className="hover:bg-[#f8f5ef]/50 transition-colors">
                    <td className="px-6 py-4 text-gray-700 font-medium">{feat}</td>
                    <td className="px-6 py-4 text-center text-[#0a4f3c] font-semibold">{etf}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{ut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#063328] py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Start investing in ETFs</h2>
          <p className="text-white/60 mb-8">Access our ETF range through the Zanari app or contact us for institutional access.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products/zanari"><Button variant="secondary" size="lg" className="gap-2">Join Zanari Waitlist <ArrowRight className="w-5 h-5" /></Button></Link>
            <Link href="/contact"><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#0a4f3c]">Contact Us</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
