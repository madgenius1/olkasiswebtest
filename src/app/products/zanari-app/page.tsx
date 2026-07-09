"use client";
import { useState } from "react";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Star,
  BookOpen,
  Shield,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

const faqs = [
  {
    q: "When does Zanari App launch?",
    a: "We are targeting a Q4 2026 launch for Kenya. Join the waitlist to be first in line and receive exclusive founding member benefits.",
  },
  {
    q: "How do I fund my Zanari App account?",
    a: "Zanari App is built natively with mobile money integration. You can also fund via bank transfer or digital means. Minimum deposit is Ksh. 100.",
  },
  {
    q: "Is Zanari App regulated?",
    a: "Yes. Zanari App will operate under Olkasis Capital's CMA Kenya licence and CDSC registration. All transactions are fully compliant with NSE and CDSC requirements.",
  },
  {
    q: "Can I invest from outside Kenya?",
    a: "Yes — Zanari App supports diaspora investors via remote KYC and accepts USD, GBP, and EUR deposits alongside Ksh.",
  },
  {
    q: "What is Rafiki?",
    a: "Rafiki (Swahili for 'friend') is Zanari App's built-in AI investment advisor. It provides personalised portfolio guidance, market insights, and financial education.",
  },
];

export default function OlkasisPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    country: "",
  });
  const [formState, setFormState] = useState<{
    status: "idle" | "loading" | "done";
    success?: boolean;
    message?: string;
  }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading" });
    const result = await submitForm("/api/waitlist", form);
    setFormState({
      status: "done",
      success: result.success,
      message: result.message,
    });
    if (result.success)
      setForm({ name: "", email: "", phone: "", type: "", country: "" });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#c9a84c] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/10">
            Flagship Product
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Zanari App.
            <br />
            <span className="text-[#c9a84c]">Invest in Kenya and Africa.</span>
            <br />
            From your phone.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mb-8">
            Kenya&apos;s most accessible retail investment platform. Mobile
            Money, Bank, and Digital funding, NSE stocks, ETFs, and Rafiki, your
            AI advisor — all in one app.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Join the Waitlist <ArrowRight className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <span>📱 iOS &amp; Android</span>
              <span>·</span>
              <span>Coming Q4 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-12 text-center">
            Everything you need to invest in Africa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Zap,
                title: "Multiple Funding Options",
                desc: "Seamlessly Deposit and withdraw in seconds. Minimum Ksh. 100. No bank account required.",
              },
              {
                Icon: BarChart3,
                title: "NSE Stocks & ETFs",
                desc: "Full access to NSE-listed equities, government bonds, and curated African ETFs.",
              },
              {
                Icon: Star,
                title: "AI Advisor Rafiki",
                desc: "Your personal AI investment advisor. Personalised portfolio guidance, risk profiling, and 24/7 market insights.",
              },
              {
                Icon: BookOpen,
                title: "Learning Hub",
                desc: "Financial education built into the app. From 'What is a stock?' to advanced portfolio theory.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-[#f8f5ef] rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#0a4f3c] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[#063328] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-12">
            How Zanari App works
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Sign up & verify",
                desc: "Create an account and complete remote KYC in under 10 minutes. Valid ID and selfie — that's it.",
              },
              {
                step: "02",
                title: "Create or Link CDSC Account",
                desc: "Create a CDSC account digitally or link your current account to transfer your assets and update portfolio at no fee.",
              },
              {
                step: "03",
                title: "Fund your account",
                desc: "Deposit via mobile money, bank transfer, or from abroad. Start with as little as Ksh. 100.",
              },
              {
                step: "04",
                title: "Start investing",
                desc: "Browse NSE stocks, ETFs, and bonds. Get Rafiki's AI guidance and build your portfolio.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="text-5xl font-bold text-[#0a4f3c]/15 mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-[#063328] text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4 text-center">
            Transparent pricing
          </h2>
          <div className="bg-[#f8f5ef] rounded-2xl overflow-hidden border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a4f3c] text-white">
                  <th className="text-left px-6 py-4 font-semibold">
                    Fee type
                  </th>
                  <th className="text-right px-6 py-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Account opening", "Free"],
                  ["Stock trading fee", "0.3% per trade (min Ksh. 50)"],
                  ["ETF management fee", "0.15% – 0.35% p.a."],
                  ["Funds deposit", "Free"],
                  ["Funds withdrawal", "Standard rates"],
                  ["FX (diaspora)", "Market rate + 0.5%"],
                ].map(([label, value]) => (
                  <tr
                    key={label}
                    className="hover:bg-white/60 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700">{label}</td>
                    <td className="px-6 py-4 text-right font-medium text-[#0a4f3c]">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-3 mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-xs leading-relaxed">
              <strong>Regulatory note:</strong> Zanari App operates under
              Olkasis Capital&apos;s CMA Kenya licence. All transactions
              processed through NSE-registered brokers and settled via CDSC.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-7 h-7 text-[#0a4f3c]" />
            <h2 className="text-3xl font-bold text-[#0a4f3c]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#063328] hover:bg-[#f8f5ef] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-[#063328] py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-3">
            Join the Zanari App Waitlist
          </h2>
          <p className="text-white/60 mb-8">
            Be among the first to access Kenya&apos;s most ambitious investment
            platform.
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
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            {[
              { id: "name", label: "Full name", type: "text", required: true },
              {
                id: "email",
                label: "Email address",
                type: "email",
                required: true,
              },
              {
                id: "phone",
                label: "Phone number",
                type: "tel",
                required: false,
              },
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-white/70 text-sm mb-1">
                  {field.label}
                </label>
                <input
                  title="select"
                  type={field.type}
                  required={field.required}
                  value={form[field.id as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [field.id]: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c]"
                />
              </div>
            ))}
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Country
              </label>
              <select
                title="select"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#c9a84c] appearance-none"
              >
                <option value="" className="bg-[#063328]">
                  Select country
                </option>
                <option value="KE" className="bg-[#063328]">
                  Kenya
                </option>
                <option value="UG" className="bg-[#063328]">
                  Uganda
                </option>
                <option value="TZ" className="bg-[#063328]">
                  Tanzania
                </option>
                <option value="TZ" className="bg-[#063328]">
                  Rwanda
                </option>
                <option value="GB" className="bg-[#063328]">
                  United Kingdom
                </option>
                <option value="US" className="bg-[#063328]">
                  United States
                </option>
                <option value="CA" className="bg-[#063328]">
                  Canada
                </option>
                <option value="AU" className="bg-[#063328]">
                  Australia
                </option>
                <option value="other" className="bg-[#063328]">
                  Other
                </option>
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">
                I am a...
              </label>
              <select
                title="select"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#c9a84c] appearance-none"
              >
                <option value="" className="bg-[#063328]">
                  Select investor type
                </option>
                <option value="individual" className="bg-[#063328]">
                  Individual investor
                </option>
                <option value="institution" className="bg-[#063328]">
                  Institution / SACCO
                </option>
                <option value="diaspora" className="bg-[#063328]">
                  Diaspora investor
                </option>
                <option value="advisor" className="bg-[#063328]">
                  Financial advisor
                </option>
              </select>
            </div>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full mt-2"
              disabled={formState.status === "loading"}
            >
              {formState.status === "loading" ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
