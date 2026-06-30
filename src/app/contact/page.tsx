"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FormAlert from "@/components/ui/FormAlert";
import { submitForm } from "@/lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [state, setState] = useState<{
    status: "idle" | "loading" | "done";
    success?: boolean;
    message?: string;
  }>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "loading" });
    const result = await submitForm("/api/contact", form);
    setState({
      status: "done",
      success: result.success,
      message: result.message,
    });
    if (result.success)
      setForm({ name: "", email: "", phone: "", department: "", message: "" });
  };

  return (
    <>
      <section className="bg-[#0a4f3c] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Our team is ready to help. Choose the right channel for your
            inquiry. <br />
            We love hearing from you.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#0a4f3c] mb-8">
                Get in touch
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  {
                    Icon: MapPin,
                    label: "Address",
                    value: "Olkasis Capital Ltd, Nairobi, Kenya",
                  },
                  {
                    Icon: Mail,
                    label: "General enquiries",
                    value: "info@olkasiscapital.com",
                  },
                  {
                    Icon: Mail,
                    label: "Investor relations",
                    value: "investors@olkasiscapital.com",
                  },
                  {
                    Icon: Mail,
                    label: "Partnerships",
                    value: "partners@olkasiscapital.com",
                  },
                  {
                    Icon: Mail,
                    label: "Press & media",
                    value: "press@olkasiscapital.com",
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: "+254 (0) 726 498 594",
                  },
                  {
                    Icon: Clock,
                    label: "Support hours",
                    value: "Monday – Friday, 8:00am – 6:00pm EAT",
                  },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0a4f3c]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#0a4f3c]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                        {label}
                      </div>
                      <div className="font-medium text-[#063328] text-sm mt-0.5">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#f8f5ef] rounded-2xl h-48 flex items-center justify-center border border-gray-100">
                <div className="text-center text-gray-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Nairobi, Kenya · Westlands</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a4f3c] mb-8">
                Send a message
              </h2>
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
                  {
                    id: "name",
                    label: "Full name",
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
                    label: "Phone (optional)",
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
                      onChange={(e) =>
                        setForm({ ...form, [f.id]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    title="dropdown"
                    value={form.department}
                    onChange={(e) =>
                      setForm({ ...form, department: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0a4f3c] text-sm appearance-none"
                  >
                    <option value="">Select department</option>
                    <option>Customer support</option>
                    <option>Investor relations</option>
                    <option>Partnerships</option>
                    <option>Press & media</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    title="textarea"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
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
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
