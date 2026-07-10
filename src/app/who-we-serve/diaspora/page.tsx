import Link from "next/link";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "Diaspora Hub — Olkasis Capital" };

export default function DiasporaPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#c9a84c] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" /> Key differentiator
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">You&apos;re far away.<br /><span className="text-[#c9a84c]">Your money grows in Nairobi.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Built for the 3.5 million Kenyans and millions of Africans in the diaspora who have always wanted to invest back home.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4">We solved the hard parts</h2>
          <p className="text-gray-600 text-lg mb-10">Investing in Kenya from abroad used to mean branch visits, wire fees, and paperwork. <span className="font-bold text-gray-900">Not anymore.</span></p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Remote KYC", desc: "Verify your identity from anywhere using just your passport and a selfie. Under 10 minutes." },
              { title: "Multi-currency deposits", desc: "Deposit in USD, GBP, or EUR. We handle the Ksh. conversion at competitive FX rates (market rate + 0.5%)." },
              { title: "Multiple Funding Options", desc: "Use digital means to fund your Olkasis App account — the same service millions already use for remittances." },
              { title: "Tax guidance", desc: "Our advisors guide you on Kenya/diaspora tax implications. Partners in the UK, US, and Canada." },
              { title: "Repatriation", desc: "Withdraw profits in your local currency at any time. No lock-in. RBA and CBK compliant." },
              { title: "Community", desc: "Join our diaspora investor community. Webinars, market updates, and peer connections." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f8f5ef] rounded-2xl p-6 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-[#0a4f3c] mb-3" />
                <h3 className="font-bold text-[#063328] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>  

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">Supported currencies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ code: "Ksh.", label: "Kenyan Shilling" }, { code: "USD", label: "US Dollar" }, { code: "GBP", label: "British Pound" }, { code: "EUR", label: "Euro" }].map(({ code, label }) => (
              <div key={code} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-bold text-[#0a4f3c]">{code}</div>
                <div className="text-gray-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">Additional currencies (CAD, AUD, SGD) coming Q2 2027.</p>
        </div>
      </section>

      <section className="bg-[#063328] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Start investing from anywhere</h2>
          <Link href="/products/olkasis-app">
            <Button variant="secondary" size="lg" className="gap-2">Join Waitlist <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
