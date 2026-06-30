"use client";
import { useState } from "react";
import { Handshake, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function PartnersPage() {
  const [form, setForm] = useState({
    company: "",
    website: "",
    type: "",
    geography: "",
    name: "",
    email: "",
    phone: "",
    goal: "",
  });
  const [state, setState] = useState<{
    status: "idle" | "loading" | "done";
    success?: boolean;
    message?: string;
  }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/partner", form);
    setState({
      status: "done",
      success: result.success,
      message: result.message,
    });
    if (result.success)
      setForm({
        company: "",
        website: "",
        type: "",
        geography: "",
        name: "",
        email: "",
        phone: "",
        goal: "",
      });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="w-8 h-8 text-[#c9a84c]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Partner with
            <br />
            <span className="text-[#c9a84c]">Olkasis Capital.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            We are building an ecosystem of technology, distribution, and
            institutional partners to accelerate Africa&apos;s investment
            revolution.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-10">
            Partnership tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technology Partners",
                color: "bg-[#0a4f3c]",
                examples: [
                  "Fintechs",
                  "Mobile money operators",
                  "API integration partners",
                  "Core banking systems",
                  "Data providers",
                ],
                desc: "Integrate with Zanari's open API to offer investment capabilities to your users, or power our platform with your technology.",
              },
              {
                title: "Distribution Partners",
                color: "bg-[#c9a84c]",
                examples: [
                  "SACCOs",
                  "Employers & corporates",
                  "Remittance companies",
                  "NGOs & foundations",
                  "Diaspora communities",
                ],
                desc: "Bring Olkasis Capital's products to your members, employees, or customers. Revenue sharing available.",
              },
              {
                title: "Institutional Partners",
                color: "bg-[#063328]",
                examples: [
                  "Pension fund managers",
                  "Insurance companies",
                  "Custodian banks",
                  "Broker-dealers",
                  "Investment banks",
                ],
                desc: "White-label products, co-managed mandates, and institutional platform integration.",
              },
            ].map(({ title, color, examples, desc }) => (
              <div
                key={title}
                className="bg-[#f8f5ef] rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className={`${color} p-6`}>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/70 text-sm">{desc}</p>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Examples
                  </div>
                  <ul className="space-y-2">
                    {examples.map((ex) => (
                      <li
                        key={ex}
                        className="text-sm text-gray-700 flex gap-2 items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#0a4f3c] rounded-full flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0a4f3c] mb-2">
            Start the conversation
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us about your organisation and how you&apos;d like to partner.
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
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white rounded-2xl p-8 border border-gray-100"
          >
            {[
              {
                id: "company",
                label: "Company name",
                type: "text",
                required: true,
              },
              {
                id: "website",
                label: "Company website",
                type: "url",
                required: false,
              },
              {
                id: "name",
                label: "Contact name",
                type: "text",
                required: true,
              },
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
                Partnership type
              </label>
              <select
                title="dropdown"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm appearance-none"
              >
                <option value="">Select type</option>
                <option>Technology partner</option>
                <option>Distribution partner</option>
                <option>Institutional partner</option>
                <option>Not sure — let&apos;s discuss</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Geography / markets
              </label>
              <input
                type="text"
                placeholder="e.g. Kenya, East Africa, UK diaspora"
                value={form.geography}
                onChange={(e) =>
                  setForm({ ...form, geography: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Partnership goal
              </label>
              <textarea
                rows={4}
                placeholder="Describe what you hope to achieve..."
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2"
              disabled={state.status === "loading"}
            >
              {state.status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  <span>Submit Partnership Inquiry</span>
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
