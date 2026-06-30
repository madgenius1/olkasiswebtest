"use client";
import { useState } from "react";
import { TrendingUp, ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function InvestorRelationsPage() {
  const [form, setForm] = useState({
    name: "",
    firm: "",
    email: "",
    type: "",
    cheque: "",
    thesis: "",
    deckRequest: "false",
  });
  const [state, setState] = useState<{
    status: "idle" | "loading" | "done";
    success?: boolean;
    message?: string;
  }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/investor", form);
    setState({
      status: "done",
      success: result.success,
      message: result.message,
    });
    if (result.success)
      setForm({
        name: "",
        firm: "",
        email: "",
        type: "",
        cheque: "",
        thesis: "",
        deckRequest: "false",
      });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[#c9a84c]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Investor Relations.
            <br />
            <span className="text-[#c9a84c]">
              Invest in Africa&apos;s future.
            </span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            <span className="font-bold text-white">Olkasis Capital </span> is building the capital markets infrastructure for
            Africa&apos;s next generation of wealth. We seek mission-aligned
            investors.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-10">
            The investment thesis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { stat: "$3.1T", label: "Africa's GDP by 2030 (World Bank)" },
              {
                stat: "1.4B",
                label: "Population — youngest continent on Earth",
              },
              {
                stat: "60%",
                label: "Adults without access to formal investment products",
              },
              {
                stat: "3.5M",
                label: "Kenyans in the diaspora sending $3.8B home annually",
              },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="bg-[#f8f5ef] rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-4xl font-bold text-[#0a4f3c] mb-2">
                  {stat}
                </div>
                <div className="text-gray-600 text-sm">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#063328] text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">
              Our opportunity
            </h3>
            <p className="text-white/80 leading-relaxed lg:text-xl text-lg">
              Africa&apos;s capital markets are chronically underdeveloped
              relative to economic fundamentals. With smartphone penetration at
              45% and mobile money infrastructure uniquely advanced, the
              technology moment has arrived. Olkasis Capital is positioned to
              capture the retail investing category in East Africa — a market
              with no scaled winner yet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">
            Current funding round
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Round</div>
                <div className="font-bold text-[#063328] text-lg">
                  Pre-Series A
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Status</div>
                <div className="font-bold text-green-600 text-lg">Open</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Target raise</div>
                <div className="font-bold text-[#063328] text-lg">USD 2.5M</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Use of funds</div>
                <div className="font-bold text-[#063328] text-lg">
                  Product + Regulatory
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-[#0a4f3c] font-semibold text-sm hover:gap-3 transition-all">
              <Download className="w-4 h-4" /> Request investor deck (gated)
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-2">
            Express interest
          </h2>
          <p className="text-gray-600 mb-8">
            For VCs, angels, family offices, and institutional investors.
          </p>
          {state.status === "done" && state.message && (
            <div className="mb-6">
              <FormAlert
                type={state.success ? "success" : "error"}
                message={state.message}
                onClose={() => setState({ status: "idle" })}
              />
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Full name", type: "text", required: true },
              {
                id: "firm",
                label: "Firm / organisation",
                type: "text",
                required: false,
              },
              {
                id: "email",
                label: "Email address",
                type: "email",
                required: true,
              },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {f.label}
                </label>
                <input
                  title="input"
                  type={f.type}
                  required={f.required}
                  value={form[f.id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investor type
              </label>
              <select
                title="dropdown"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm appearance-none"
              >
                <option value="">Select type</option>
                <option>Venture Capital</option>
                <option>Angel Investor</option>
                <option>Family Office</option>
                <option>Institutional Investor</option>
                <option>Strategic / Corporate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typical cheque size
              </label>
              <select
                title="amount"
                value={form.cheque}
                onChange={(e) => setForm({ ...form, cheque: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm appearance-none"
              >
                <option value="">Select range</option>
                <option>Under USD 250,000</option>
                <option>USD 250,000 - 500,000 </option>
                <option>USD 500,000 - 1M</option>
                <option>USD 1M - 5M</option>
                <option>USD 5M+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Africa / fintech thesis (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your investment thesis..."
                value={form.thesis}
                onChange={(e) => setForm({ ...form, thesis: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm resize-none"
              />
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.deckRequest === "true"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    deckRequest: e.target.checked ? "true" : "false",
                  })
                }
                className="w-4 h-4 accent-[#0a4f3c]"
              />
              <span className="text-sm text-gray-700">
                Request investor deck
              </span>
            </label>
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2"
              disabled={state.status === "loading"}
            >
              {state.status === "loading" ? (
                "Submitting..."
              ) : (
                <>
                  <span>Submit Interest</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
