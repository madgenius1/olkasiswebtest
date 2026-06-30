import Link from "next/link";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = { title: "Our Story — Olkasis Capital" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Built for Africa.<br /><span className="text-[#c9a84c]">By Africans.</span></h1>
          <p className="text-white/70 text-xl leading-relaxed">Olkasis Capital was born from a simple observation: African wealth deserved better infrastructure than it had been given.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>Africa holds 30% of the world&apos;s mineral wealth, 60% of its arable land, and 1.4 billion people — yet African capital markets remain chronically underutilised by everyday Africans. Savings sit in low-yield accounts. The diaspora sends remittances home but has no reliable way to invest.</p>
            <p>Olkasis Capital was founded to close that gap. We are building the capital markets infrastructure that Africa&apos;s next generation of wealth deserves — starting with Kenya, and expanding to serve the entire continent and its diaspora globally.</p>
            <p>Our flagship product, Zanari, is Kenya&apos;s first genuinely accessible retail investment platform. Fund with M-Pesa. Buy NSE stocks and ETFs. Get guidance from Rafiki, your AI investment advisor. No minimum balance that locks out first-time investors.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Target, label: "Mission", text: "To make institutional-grade investing accessible to every African, wherever they are in the world." },
              { Icon: Lightbulb, label: "Vision", text: "A world where African wealth is owned, managed, and grown by Africans — at scale." },
              { Icon: Users, label: "Values", text: "Transparency, accessibility, long-term thinking, and an unwavering commitment to Africa's economic sovereignty." },
            ].map(({ Icon, label, text }) => (
              <div key={label} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-[#0a4f3c]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0a4f3c]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a4f3c] mb-3">{label}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4">Leadership Team</h2>
          <p className="text-gray-600 mb-10">The people building Africa&apos;s most ambitious investment platform.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Founder & CEO", role: "Building Africa's capital infrastructure" },
              { name: "Chief Investment Officer", role: "Decades of African markets expertise" },
              { name: "Head of Technology", role: "Scaling financial platforms across Africa" },
            ].map((member, i) => (
              <div key={i} className="bg-[#f8f5ef] rounded-2xl p-6">
                <div className="w-16 h-16 bg-[#0a4f3c]/10 rounded-full mb-4" />
                <div className="font-bold text-[#063328]">{member.name}</div>
                <div className="text-gray-500 text-sm mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a4f3c] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">ESG &amp; Impact</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">We believe profit and purpose are not mutually exclusive. Every investment decision at Olkasis Capital is guided by our commitment to sustainable, responsible returns that benefit Africa.</p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2">Get in touch <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
