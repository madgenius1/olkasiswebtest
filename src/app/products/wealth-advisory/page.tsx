"use client";
import { useState } from "react";
import { Heart, Target, Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function WealthAdvisoryPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });
  const [state, setState] = useState<{ status: "idle" | "loading" | "done"; success?: boolean; message?: string }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/consultation", form);
    setState({ status: "done", success: result.success, message: result.message });
    if (result.success) setForm({ name: "", email: "", phone: "", goal: "", message: "" });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Wealth Advisory.<br /><span className="text-[#c9a84c]">Your future, planned.</span></h1>
          <p className="text-white/70 text-xl max-w-2xl">Bespoke financial planning for individuals and families building lasting legacies. A dedicated human advisor, not a chatbot.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0a4f3c] mb-6">What we offer</h2>
              <div className="space-y-6">
                {[
                  { Icon: Target, title: "Goal-based financial planning", desc: "Retirement, education, home purchase, business succession. We map your goals to a concrete, actionable financial plan." },
                  { Icon: Heart, title: "Estate planning", desc: "Wills, trusts, and inheritance structures that protect your family's wealth across generations." },
                  { Icon: Users, title: "Dedicated advisor", desc: "A named human advisor who knows your full financial picture. Not a chatbot. Not a call centre." },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a4f3c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0a4f3c]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#063328] mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f8f5ef] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0a4f3c] mb-6">Book a free consultation</h3>
              {state.status === "done" && state.message && (
                <div className="mb-4"><FormAlert type={state.success ? "success" : "error"} message={state.message} onClose={() => setState({ status: "idle" })} /></div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Full name", type: "text", required: true },
                  { id: "email", label: "Email", type: "email", required: true },
                  { id: "phone", label: "Phone number", type: "tel", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                    <input title="items" type={f.type} required={f.required} value={form[f.id as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#0a4f3c] text-sm" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary financial goal</label>
                  <select title="items" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#0a4f3c] text-sm appearance-none">
                    <option value="">Select a goal</option>
                    <option>Holiday Vacation</option>
                    <option>Retirement planning</option>
                    <option>Education funding</option>
                    <option>Estate &amp; inheritance planning</option>
                    <option>Business succession</option>
                    <option>Wealth preservation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell us more (optional)</label>
                  <textarea title="textarea" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#0a4f3c] text-sm resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2" disabled={state.status === "loading"}>
                  {state.status === "loading" ? "Booking..." : <><span>Book Free Consultation</span><ArrowRight className="w-4 h-4" /></>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
