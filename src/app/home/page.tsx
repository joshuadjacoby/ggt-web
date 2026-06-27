import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Brigit Jacoby, LCSW | Anxiety Therapist in Los Angeles & Santa Monica",
  description:
    "Virtual therapy for high-achieving adults in Los Angeles. Specializing in anxiety, people-pleasing, and authentic relationships. Book a free 20-minute consultation.",
};

const recognitionItems = [
  "Feel chronically anxious — even when nothing is technically wrong",
  "Say yes automatically, then quietly resent it",
  "Worry that people only love the version of you that has it together",
  "Have a hard time asking for what you need without guilt",
  "Want deeper, more honest relationships — but don't know how to let people in",
  "Are tired of feeling like a guest in your own life",
];

const expectations = [
  {
    title: "Honest & Warm",
    body: "A judgment-free space where you can show up exactly as you are — the put-together version, the exhausted one, or the one without the right words yet.",
  },
  {
    title: "Evidence-Based",
    body: "Sessions draw from CBT, Acceptance and Commitment Therapy, and attachment-based approaches — tailored to you, not cookie-cutter.",
  },
  {
    title: "Fully Virtual",
    body: "Sessions from wherever you're most comfortable — your home, your car, your office. No commute, no waiting room, just space for you.",
  },
];

const services = [
  {
    title: "Anxiety & High-Functioning Stress",
    body: "For the person who can't slow down, over-prepares for everything, and always feels like the other shoe is about to drop.",
    href: "/services#anxiety",
  },
  {
    title: "People-Pleasing & Boundaries",
    body: "For the person who's spent years making sure everyone else is okay — at the expense of their own needs and sense of self.",
    href: "/services#people-pleasing",
  },
  {
    title: "Finding Your Authentic Voice",
    body: "For the person who's excellent at communicating — but struggles to speak honestly about what they feel or what they need.",
    href: "/services#voice",
  },
  {
    title: "Relationships & Intimacy",
    body: "For the person who craves deeper connection but finds that truly being known feels like a risk they're not ready to take.",
    href: "/services#relationships",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-warm-cream py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-6">
                Anxiety Therapist · Los Angeles · Virtual Throughout California
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-6">
                A space to stop performing and start living.
              </h1>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-4">
                You&apos;ve worked hard to build a life that looks great from
                the outside. But privately? There&apos;s a quiet, persistent hum
                of anxiety that never quite goes away.
              </p>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-10">
                I help high-achieving adults in Los Angeles untangle anxiety,
                let go of people-pleasing patterns, and find the voice
                they&apos;ve been keeping to themselves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a Free Consultation →
                </Link>
                <Link href="/about" className="btn-outline text-center">
                  Learn More About Working Together
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-soft-sage rounded-3xl -rotate-2" />
                <Image
                  src="/brigit.png"
                  alt="Brigit Jacoby, LCSW — Anxiety therapist in Los Angeles"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-xl object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition section */}
      <section className="bg-soft-sage py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-4">
              This might be the right fit if you...
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recognitionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage-teal flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-sm text-charcoal leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-deep-teal mt-8">
            If that sounds familiar, you&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-4">
              What you can expect
            </h2>
            <p className="text-stone-gray max-w-xl mx-auto">
              Therapy with me is conversational, collaborative, and grounded in
              evidence. You won&apos;t be handed a worksheet and sent on your
              way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map(({ title, body }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-6">
                <div className="w-8 h-1 bg-sage-teal rounded mb-4" />
                <h3 className="font-semibold text-charcoal text-lg mb-3">
                  {title}
                </h3>
                <p className="text-stone-gray text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-warm-cream py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-4">
              How I can help
            </h2>
            <p className="text-stone-gray max-w-xl mx-auto">
              Individual therapy for adults throughout California via secure,
              confidential video sessions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(({ title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-charcoal text-lg mb-2 group-hover:text-sage-teal transition-colors">
                  {title}
                </h3>
                <p className="text-stone-gray text-sm leading-relaxed mb-4">
                  {body}
                </p>
                <span className="text-sage-teal text-xs font-medium tracking-wide">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/brigit.png"
                alt="Brigit Jacoby, Licensed Clinical Social Worker in Venice Beach"
                width={480}
                height={560}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
                About Brigit
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-5">
                Hi, I&apos;m Brigit.
              </h2>
              <p className="text-stone-gray leading-relaxed mb-4">
                I&apos;m a Licensed Clinical Social Worker based in Venice
                Beach, and I work with high-achieving adults who are done
                performing and ready to actually live.
              </p>
              <p className="text-stone-gray leading-relaxed mb-4">
                My clients are smart, self-aware, and often their own harshest
                critics. They come to therapy not because they&apos;re falling
                apart, but because something quieter is happening: a growing
                disconnection between who they are and how they&apos;re living.
              </p>
              <p className="text-stone-gray leading-relaxed mb-8">
                Therapy works when you feel safe enough to be honest, so
                that&apos;s always where we start.
              </p>
              <Link href="/about" className="btn-primary">
                More About Me & My Approach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-deep-teal py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-white mb-5">
            Ready to take the first step?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            A free 20-minute consultation is a relaxed, no-pressure
            conversation. We&apos;ll talk about what&apos;s been going on for
            you, how I work, and whether it feels like a match.
          </p>
          <Link href="/contact" className="btn-white">
            Book Your Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
