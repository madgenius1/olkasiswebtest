"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  Users,
  ChevronRight,
  Star,
  BarChart3,
  Smartphone,
  BookOpen,
  Zap,
} from "lucide-react";
import { HiCash } from "react-icons/hi";
import { HiBolt, HiKey, HiShieldCheck } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

const points = [
  {
    title: "Convenience",
    tagline: "We’re changing the rules.",
    description:
      "We’ve removed the barriers so you can start building your portfolio from as low as Ksh. 100, right from the palm of your hand.",
    accent: "text-blue-600 dark:text-blue-400",
    // Changed: Solid background for dark mode to prevent bleed-through
    bg: "bg-[#0a4f3c]",
  },
  {
    title: "Inclusivity",
    tagline: "Investing isn't just for the few anymore.",
    description:
      "With fractional shares and zero account minimums, we’ve democratized the Kenyan financial market. With us, you have a seat at the table.",
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-[#0a4f3c]",
  },
  {
    title: "Transparency",
    tagline: "Knowledge is your greatest asset.",
    description:
      "We offer real-time market data, no hidden fees, direct access to your money giving you clarity and the confidence to make informed decisions in the NSE market.",
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-[#0a4f3c]",
  },
  {
    title: "Security",
    tagline: "Your peace of mind is non-negotiable.",
    description:
      "We employ bank-grade encryption, security, and multi-factor authentication to ensure your data and assets are protected by the most advanced safety protocols available today.",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-[#0a4f3c]",
  },
];

const features = [
  {
    title: "Faster CDS Accounts Verification",
    description:
      "Open digital trading accounts faster through our digital onboarding flow.",
    icon: HiBolt,
    accent: "text-blue-600 bg-blue-100 dark:bg-blue-950/60",
  },
  {
    title: "All Inclusive",
    description:
      "Deposit and withdraw funds globally, trade stocks, and build wealth.",
    icon: HiCash,
    accent: "text-gray-600 bg-gray-50 dark:bg-gray-900/60",
  },
  {
    title: "Direct Asset Ownership",
    description: "Assets are registered in your name and in your full control.",
    icon: HiKey,
    accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60",
  },
  {
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption and full compliance with Kenyan financial regulations and custodial standards.",
    icon: HiShieldCheck,
    accent: "text-purple-600 bg-purple-100 dark:bg-purple-950/60",
  },
];

export default function HomePage() {
  const [waitlistForm, setWaitlistForm] = useState({
    email: "",
    phone: "",
    type: "",
  });
  const [formState, setFormState] = useState<{
    status: "idle" | "loading" | "done";
    success?: boolean;
    message?: string;
  }>({ status: "idle" });

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading" });
    const result = await submitForm("/api/waitlist", waitlistForm);
    setFormState({
      status: "done",
      success: result.success,
      message: result.message,
    });
    if (result.success) setWaitlistForm({ email: "", phone: "", type: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0a4f3c] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-5xl">
            {/* <div className="inline-flex items-center gap-2 bg-white/10 text-[#c9a84c] text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
              CMA Kenya Licensed · NSE Member
            </div> */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Invest in Kenya,
              <br />
              <span className="text-[#c9a84c]">from Anywhere, </span>
              in the world.
            </h1>
            {/* <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              <span className="font-bold text-white">Olkasis Capital </span> brings institutional-grade investment to everyday
              investors. Whether you&apos;re in Nairobi, London, Tokyo or Toronto —
              your money should work as hard as you do.
            </p> */}
            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Buy and sell NSE shares, derivatives, invest in Secondary Bonds,
              and access ETFs, with direct ownership from one secure,
              easy-to-use{" "}
              <span className="font-bold text-white">Zanari App</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products/olkasis-app">
                <Button size="lg" variant="secondary" className="gap-2">
                  Join Zanari App Waitlist <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-[#0a4f3c]"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            {[
              { label: "CMA Kenya", sublabel: "In Progress" },
              { label: "NSE", sublabel: "In Progress" },
              { label: "CDSC", sublabel: "In Progress" },
              { label: "AML/KYC", sublabel: "Compliant" },
              { label: "256-bit SSL", sublabel: "Bank-grade Security" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0a4f3c]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#0a4f3c]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0a4f3c]">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Zanari App Feature Highlight */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0a4f3c]/10 text-[#0a4f3c] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Zanari App — Our Flagship Mobile Platform
              </div>
              <h2 className="text-4xl font-bold text-[#063328] mb-6">
                Invest in Kenya.
                <br />
                From your phone.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <span className="font-bold">Zanari App </span> is Kenya&apos;s
                most accessible mobile investment platform. Fund with mobile
                money, bank, and digitally, buy NSE stocks and ETFs, enjoy lower
                p2p transfer rates, and get personalized guidance from{" "}
                <span className="font-bold">Rafiki AI</span> — your AI
                investment assistant.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-8">
                {[
                  {
                    icon: Zap,
                    title: "Instant Funding",
                    desc: "Deposit and withdraw in seconds",
                  },
                  {
                    icon: BarChart3,
                    title: "NSE Stocks",
                    desc: "Full NSE market access",
                  },
                  {
                    icon: Star,
                    title: "AI Advisor Rafiki",
                    desc: "Personalized guidance 24/7",
                  },
                  {
                    icon: BookOpen,
                    title: "Learning Hub",
                    desc: "Built-In Financial Education",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#f8f5ef] rounded-lg flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-[#0a4f3c]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#063328]">
                        {f.title}
                      </div>
                      <div className="text-xs text-gray-500">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/products/olkasis-app">
                <Button size="lg" className="gap-2">
                  Join the Waitlist{" "}
                  <ArrowRight className="w-5 h-5 cursor-pointer" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#0a4f3c] to-[#063328] rounded-3xl p-8 text-white">
              <div className="bg-white/10 rounded-2xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm">Portfolio Value</span>
                  <span className="text-[#c9a84c] text-xs font-semibold">
                    +12.4% YTD
                  </span>
                </div>
                <div className="text-3xl font-bold">Ksh. 284,500</div>
                <div className="text-white/50 text-sm mt-1">≈ USD 2,204</div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Safaricom",
                    shares: "3000",
                    change: "+2.1%",
                    value: "Ksh. 42,000",
                  },
                  {
                    name: "KCB Group",
                    shares: "690",
                    change: "+0.8%",
                    value: "Ksh. 28,500",
                  },
                  {
                    name: "Equity Group",
                    shares: "420",
                    change: "+5.3%",
                    value: "Ksh. 67,200",
                  },
                ].map((stock) => (
                  <div
                    key={stock.name}
                    className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                  >
                    <span className="font-medium">{stock.name}</span>
                    <div className="text-right">
                      <div className="text-[#c9a84c] text-sm font-semibold">
                        {stock.change}
                      </div>
                      <div className="text-white/60 text-xs">{stock.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Points */}
      <section className="relative bg-[#0a4f3c] transition-colors duration-500">
        <div className="relative">
          {points.map((point, index) => (
            <section
              key={point.title}
              className={`
              sticky top-0 h-screen flex items-center justify-center isolate
              transition-all duration-700 ease-out
              ${point.bg}
            `}
            >
              <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Left */}
                  <div className="space-y-4">
                    {/* <div className="absolute top-2 left-2 text-sm tracking-widest text-gray-400 dark:text-gray-500">
                    0{index + 1}
                  </div> */}

                    <span
                      className={`block h-2 w-18 rounded-full bg-current ${point.accent}`}
                    />

                    <h2
                      className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${point.accent}`}
                    >
                      {point.title}
                    </h2>

                    <p className="text-xl md:text-2xl font-semibold text-white max-w-xl">
                      {point.tagline}
                    </p>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 max-w-xl">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Products Overview 
      <section className="bg-[#f8f5ef] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0a4f3c] mb-4">
              Built for every investor
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From first-time retail investors to institutional mandates — our
              product suite grows with you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Olkasis App",
                desc: "Kenya's first retail investment app with M-Pesa funding, NSE stocks, and your AI advisor Rafiki.",
                tag: "Flagship Mobile App",
                color: "bg-[#0a4f3c]",
                href: "/products/olkasis-app",
              },
              {
                icon: BarChart3,
                title: "ETFs",
                desc: "Diversified, low-cost exposure to African and global markets through our curated ETF range.",
                tag: "Lowest Fees",
                color: "bg-[#c9a84c]",
                href: "/products/etfs",
              },
              {
                icon: TrendingUp,
                title: "Derivatives",
                desc: "Institutional mandates across equity, fixed income, and balanced portfolios with full reporting.",
                tag: "Institutional Priority",
                color: "bg-[#063328]",
                href: "/products/asset-management",
              },
              // {
              //   icon: Users,
              //   title: "Wealth Advisory",
              //   desc: "Bespoke financial planning, goal-setting, and estate planning with a dedicated human advisor.",
              //   tag: "HNW",
              //   color: "bg-[#1a1a2e]",
              //   href: "/products/wealth-advisory",
              // },
            ].map((product) => (
              <Link key={product.title} href={product.href} className="group">
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div
                    className={`w-12 h-12 ${product.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider">
                    {product.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0a4f3c] mt-1 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-1 text-[#0a4f3c] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    */}

      {/* Built For  */}
      

      {/* Stats */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { value: "$50M+", label: "Target AUM at Launch" },
              // { value: "5", label: "African Markets" },
              { value: "25+", label: "NSE Securities" },
              { value: "1168+", label: "Waitlist Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#0a4f3c] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Finally, a platform built for Kenyans by people who understand Kenya. The funding integration alone changes everything.",
                author: "Beta tester, Nairobi",
                role: "Individual Investor",
              },
              {
                quote:
                  "As a SACCO treasurer, we've been looking for a compliant, transparent platform. Olkasis App delivers exactly that.",
                author: "Beta tester, Mombasa",
                role: "Institutional Partner",
              },
              {
                quote:
                  "I live in Toronto but my money grows in Kenya. The remote KYC process was seamless — took under 10 minutes.",
                author: "Beta tester, UK",
                role: "Diaspora Community",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#f8f5ef] rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#c9a84c] text-[#c9a84c]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-semibold text-[#063328] text-sm">
                  {t.author}
                </div>
                <div className="text-gray-400 text-xs">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
        <section className="bg-[#0a4f3c] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center p-4 mb-8">
                <h3 className="text-white font-semibold lg:text-5xl text-3xl">Learning Hub & Rafiki AI</h3>
              </div>
                {/* Section 6: Kenyan Context Advantage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-[#f8f5ef] border border-gray-200 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">NSE Context</h4>
                                <p className="text-sm text-gray-600">Get the fundamentals and specific explanations for NSE listed companies.</p>
                            </div>
                            <div className="p-6 bg-[#f8f5ef] border border-gray-200 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Mobile-First</h4>
                                <p className="text-sm text-gray-600">Insights that account for investing, funding patterns and local behavior.</p>
                            </div>
                            <div className="p-6 bg-[#f8f5ef] border border-gray-200 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Local Realities</h4>
                                <p className="text-sm text-gray-600">Understanding inflation and interest rates within the Kenyan economy.</p>
                            </div>
                            <div className="p-6 bg-[#f8f5ef] border border-gray-200  rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Simplified Jargon</h4>
                                <p className="text-sm text-gray-600">Financial education that feels familiar, not intimidating.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white/90">Built with Kenyan and Diaspora investors in mind</h3>
                        <div className="space-y-4">
                            <p className="text-lg text-white/80 leading-relaxed">
                                Rafiki AI understands the realities of investing in Kenya. It explains concepts using Kenyan market examples, references NSE-listed companies, and accounts for how most Kenyans interact with money.
                            </p>
                            <p className="text-white/80 text-lg">
                                By grounding explanations in local context—including mobile-first behavior and funding patterns—Rafiki helps make investing feel accessible to everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Partner / Investor CTA */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#f8f5ef] rounded-2xl px-8 py-8">
            <div>
              <h3 className="text-xl font-bold text-[#063328]">
                Interested in Olkasis Capital?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Join as a partner or explore investment opportunities in our
                company.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/partners">
                <Button variant="outline" className="gap-2">
                  Become a Partner <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/investor-relations">
                <Button className="gap-2">
                  Invest in Us <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="bg-[#063328] py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be first on the <span className="text-[#c9a84c]">Zanari App</span>
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join thousands already on the waitlist. Get early access, exclusive
            beta features, and founding member perks.
          </p>
          {formState.status === "done" && formState.message && (
            <div className="mb-6">
              <FormAlert
                type={formState.success ? "success" : "error"}
                message={formState.message}
                onClose={() => setFormState({ status: "idle" })}
              />
            </div>
          )}
          <form onSubmit={handleWaitlist} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email address"
              value={waitlistForm.email}
              onChange={(e) =>
                setWaitlistForm({ ...waitlistForm, email: e.target.value })
              }
              className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number (e.g. +254 700 000 000)"
              value={waitlistForm.phone}
              onChange={(e) =>
                setWaitlistForm({ ...waitlistForm, phone: e.target.value })
              }
              className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <select
              title="icon"
              value={waitlistForm.type}
              onChange={(e) =>
                setWaitlistForm({ ...waitlistForm, type: e.target.value })
              }
              className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none"
            >
              <option value="" className="bg-[#063328]">
                I am a... (optional)
              </option>
              <option value="individual" className="bg-[#063328]">
                Individual Investor
              </option>
              <option value="institution" className="bg-[#063328]">
                Institution / SACCO
              </option>
              <option value="diaspora" className="bg-[#063328]">
                Diaspora Investor
              </option>
              <option value="advisor" className="bg-[#063328]">
                Financial Advisor / IFA
              </option>
            </select>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full gap-2"
              disabled={formState.status === "loading"}
            >
              {formState.status === "loading" ? (
                "Joining..."
              ) : (
                <>
                  <span>Join the Waitlist</span>{" "}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
          <p className="text-white/30 text-xs mt-6">
            No spam. We&apos;ll only contact you about Zanari App launch
            updates.
          </p>
        </div>
      </section>
    </>
  );
}
