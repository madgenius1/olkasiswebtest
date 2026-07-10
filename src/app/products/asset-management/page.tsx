"use client";
import { useState } from "react";
import { TrendingUp, FileText, Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function AssetManagementPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", aum: "", message: "" });
  const [state, setState] = useState<{ status: "idle" | "loading" | "done"; success?: boolean; message?: string }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/inquiry", form);
    setState({ status: "done", success: result.success, message: result.message });
    if (result.success) setForm({ name: "", company: "", email: "", aum: "", message: "" });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Asset Management.<br /><span className="text-[#c9a84c]">Institutional excellence.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Mandated portfolio management for SACCOs, pension funds, corporates, and endowments. CMA-compliant and built for African capital markets.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-10">Our mandates</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { Icon: TrendingUp, title: "Equity Mandate", desc: "Active and passive equity strategies across NSE-listed securities, pan-African equities, and global equity ETFs." },
              { Icon: FileText, title: "Fixed Income Mandate", desc: "Government bonds, corporate bonds, and money market instruments. Capital preservation with competitive returns." },
              { Icon: Users, title: "Balanced Mandate", desc: "Customised multi-asset portfolios blending equity, fixed income, and alternative allocations." },
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-4">Minimum AUM &amp; reporting</h2>
          <div className="space-y-3 text-gray-600">
            {[
              ["Minimum AUM", "Ksh. 10,000,000 (≈ USD 77,000)"],
              ["Reporting", "Monthly statements, quarterly reviews, annual audited performance reports"],
              ["Compliance", "CMA Kenya licensed, RBA (Retirement Benefits Authority) compliant"],
              ["Custodian", "Independent third-party custodian for full asset segregation"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-[#0a4f3c] w-40 flex-shrink-0">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-2">Make an enquiry</h2>
          <p className="text-gray-600 mb-8">Our institutional team will respond within 1 business day.</p>
          {state.status === "done" && state.message && (
            <div className="mb-4"><FormAlert type={state.success ? "success" : "error"} message={state.message} onClose={() => setState({ status: "idle" })} /></div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Full name", type: "text", required: true },
              { id: "company", label: "Organisation", type: "text", required: true },
              { id: "email", label: "Email address", type: "email", required: true },
              { id: "aum", label: "AUM size (Ksh.)", type: "text", required: false },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                <input title="data" type={f.type} required={f.required} value={form[f.id as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea title="textarea" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2" disabled={state.status === "loading"}>
              {state.status === "loading" ? "Sending..." : <><span>Send Enquiry</span><ArrowRight className="w-4 h-4" /></>}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
