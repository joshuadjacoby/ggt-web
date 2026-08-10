import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

const title = "Book a Free Consultation";
const description =
  "Ready to take the first step? Book a free 20-minute consultation with Brigit Jacoby, LCSW — anxiety therapist in Venice Beach, Santa Monica, and Los Angeles. No pressure, no commitment.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brigitjacoby.com/contact",
    siteName: "Brigit Jacoby, LCSW",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-warm-cream py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
            Free Consultation · No Commitment
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-4 sm:mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-base sm:text-lg text-stone-gray leading-relaxed max-w-2xl mx-auto mb-10">
            Taking the first step is often the hardest part. A free 20-minute
            consultation is a relaxed, no-pressure conversation. We&apos;ll
            talk about what&apos;s been going on for you, how I work, and
            whether it feels like a match.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-xl mx-auto">
            <p className="text-sm font-semibold text-charcoal uppercase tracking-widest mb-3">
              Book a Free Consultation
            </p>
            <p className="text-stone-gray text-sm leading-relaxed mb-6">
              Schedule directly below, or send a message and I&apos;ll be in
              touch within 1–2 business days.
            </p>
            <Link href="https://goldengatetherapy.clientsecure.me/request/service" className="btn-primary block text-center">
              Schedule Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <ContactForm />

      {/* Final CTA */}
      <section className="bg-deep-teal py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-lg leading-relaxed">
            I look forward to connecting with you.
          </p>
          <p className="text-white font-semibold mt-2">— Brigit Jacoby, LCSW</p>
        </div>
      </section>
    </main>
  );
}
