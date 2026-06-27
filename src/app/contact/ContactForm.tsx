"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const faqs = [
  {
    q: "What's the difference between therapy and coaching?",
    a: "Therapy goes deeper — we explore the roots of patterns, not just the surface behaviors. As a Licensed Clinical Social Worker, I'm trained to work with mental health concerns and the emotional experiences that drive them.",
  },
  {
    q: "Do you take insurance?",
    a: "I'm an out-of-network provider, which means I don't bill insurance directly. However, I can provide a superbill that you can submit to your insurance company for potential reimbursement if you have out-of-network benefits.",
  },
  {
    q: "How long will I be in therapy?",
    a: "That depends entirely on you and your goals. Some people come for a focused period of a few months; others find value in longer-term work. We'll check in regularly to make sure therapy is serving you.",
  },
  {
    q: "What if I'm not sure therapy is right for me?",
    a: "That's exactly what the free consultation is for. You don't need to know if you're \"ready.\" You just need to show up.",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_tldiyls",
        "template_qzfrvvp",
        { ...formData },
        "ESJuALi_woGqpuAJe",
      );

      if (result.text === "OK") {
        toast.success("Message sent! I'll be in touch within 1–2 business days.");
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        toast.error("Message not sent. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again or email directly.");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      {/* Form + contact info */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-bold italic text-charcoal mb-5">
                Prefer to reach out first?
              </h2>
              <p className="text-stone-gray leading-relaxed mb-6">
                That&apos;s completely fine. Send a message below and I&apos;ll
                get back to you within 1–2 business days.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-charcoal">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:brigit@goldengatetherapy.com"
                    className="text-sage-teal hover:underline"
                  >
                    brigit@goldengatetherapy.com
                  </a>
                </p>
                <p className="text-sm text-charcoal">
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:3105611461"
                    className="text-sage-teal hover:underline"
                  >
                    (310) 561-1461
                  </a>
                </p>
                <p className="text-sm text-charcoal">
                  <span className="font-medium">Location:</span> Venice Beach,
                  CA · Virtual throughout California
                </p>
              </div>

              {/* Crisis notice */}
              <div className="bg-warm-cream rounded-xl p-4 border border-sage-teal/20">
                <p className="text-xs text-stone-gray leading-relaxed">
                  <span className="font-semibold text-charcoal">
                    If you are in crisis:
                  </span>{" "}
                  Please contact the{" "}
                  <span className="font-semibold">
                    988 Suicide &amp; Crisis Lifeline
                  </span>{" "}
                  (call or text 988) or go to your nearest emergency room. This
                  form is not monitored for emergencies.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              className="bg-warm-cream rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-xs font-medium text-charcoal uppercase tracking-widest mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-sage-teal/40 bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-xs font-medium text-charcoal uppercase tracking-widest mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-sage-teal/40 bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-charcoal uppercase tracking-widest mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-sage-teal/40 bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-charcoal uppercase tracking-widest mb-2"
                >
                  What brings you here?{" "}
                  <span className="text-stone-gray normal-case">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A brief note about what's been going on..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-sage-teal/40 bg-white resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold italic text-charcoal mb-8 text-center">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-3">{q}</h3>
                <p className="text-stone-gray text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-gray text-sm mt-8">
            — Brigit Jacoby, LCSW #121726
          </p>
        </div>
      </section>
    </>
  );
}
