import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "For Individual Investors — Olkasis Capital" };

export default function IndividualsPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Built for you.<br /><span className="text-[#c9a84c]">The individual investor.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Whether you&apos;re saving your first Ksh. 500 or building a multi-million portfolio — Olkasis App is built for your journey.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">Start small. Grow fast.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">We built Olkasis App to answer first-time investor questions, not dismiss them.</p>
              <ul className="space-y-3">
                {[
                  "Minimum deposit: Ksh. 100 — less than a cup of coffee",
                  "Fund with Mobile Money, Bank, or other Digital Means, no bank account required",
                  "AI advisor Rafiki guides every decision",
                  "Built-in financial education hub",
                  "CMA Kenya regulated — your money is protected",
                  "Withdraw anytime — no lock-in periods",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-[#0a4f3c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f8f5ef] rounded-2xl p-8">
              <h3 className="font-bold text-[#063328] text-xl mb-4">Your investment journey</h3>
              <div className="space-y-4">
                {[
                  { step: "S", title: "Start by creating your Olkasis App account", desc: "10-minute remote KYC, no branch visit needed" },
                  { step: "F", title: "Deposit Funds in your Chequing Account", desc: "From Ksh. 100. Instant, zero fees" },
                  { step: "I", title: "Invest and Build your portfolio", desc: "NSE stocks, ETFs, and bonds — guided by Rafiki" },
                  { step: "G", title: "Watch your wealth Grow", desc: "Compound returns, reinvested automatically" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#0a4f3c] rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{step}</div>
                    <div>
                      <div className="font-semibold text-[#063328] text-sm">{title}</div>
                      <div className="text-gray-500 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#063328] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to start?</h2>
          <Link href="/products/olkasis-app">
            <Button variant="secondary" size="lg" className="gap-2">Join Olkasis App Waitlist <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
