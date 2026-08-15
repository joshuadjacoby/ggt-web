import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anxiety Therapist for Adults & Teens in Venice Beach, CA",
  description:
    "Virtual therapy for high-achieving adults, teens, and the families supporting them in Venice Beach, Santa Monica, and Los Angeles. Specializing in anxiety, burnout, people-pleasing, and authentic relationships. Book a free 20-minute consultation.",
  alternates: {
    canonical: "https://brigitjacoby.com/",
  },
};

const testimonials = [
  {
    quote:
      "After over half a year of weekly appointments with Brigit, I will say that she has helped me with my mental health. From helping me process feelings through difficult times, helping me create healthier habits, or challenging me to get out of my comfort zone. Brigit is extremely understanding and is always helping me solve my problems!",
    attribution: "Verified client, age 25–34",
    detail: "36 sessions · Grow Therapy",
  },
  {
    quote:
      "I thought that she seemed very easy to communicate with openly and I find that inviting feeling to be important for individuals looking for therapy. She was very intelligent, positive, and creates a safe space easily.",
    attribution: "Verified client, age 25–34",
    detail: "Grow Therapy",
  },
  {
    quote:
      "She was very sweet and welcoming. Brigit seemed like she really wanted to get to the base of the problem and where to go from there. She was very genuine and willing to help me work through things.",
    attribution: "Verified client, age 18–24",
    detail: "Grow Therapy",
  },
];

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
    title: "Anxiety, Stress & Burnout",
    body: "For the person who can't slow down, over-prepares for everything, and always feels like the other shoe is about to drop — even when it looks like burnout from the outside.",
    href: "/services#anxiety",
  },
  {
    title: "People-Pleasing & Boundaries",
    body: "For the person who's spent years making sure everyone else is okay — at the expense of their own needs and sense of self.",
    href: "/services#people-pleasing",
  },
  {
    title: "Finding Your Voice & Authentic Expression",
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
      <section className="bg-warm-cream py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
                Anxiety Therapist · Venice Beach · Virtual Throughout California
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-4 sm:mb-6">
                A space to stop performing and start living.
              </h1>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-3">
                You&apos;ve worked hard to build a life that looks great from
                the outside. But privately? There&apos;s a quiet, persistent hum
                of anxiety that never quite goes away.
              </p>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-6 sm:mb-10">
                I help high-achieving adults, teens, and the families
                supporting them in Venice Beach, Santa Monica, and the
                Westside untangle anxiety, let go of people-pleasing
                patterns, and find the voice they&apos;ve been keeping to
                themselves.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a Free Consultation →
                </Link>
                <Link href="/about" className="btn-outline text-center">
                  Learn More About Working Together
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-2 lg:-inset-4 bg-soft-sage rounded-3xl -rotate-2" />
                <Image
                  src="/brigit-landing.jpg"
                  alt="Brigit Jacoby, LCSW, anxiety therapist in Venice Beach, CA, smiling in a professional headshot"
                  width={500}
                  height={750}
                  className="relative rounded-2xl shadow-xl object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition section */}
      <section className="bg-soft-sage py-12 lg:py-16">
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
      <section className="bg-white py-12 lg:py-16">
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
      <section className="bg-warm-cream py-12 lg:py-16">
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
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block relative">
              <Image
                src="/brigit-and-marshall.jpg"
                alt="Brigit Jacoby, LCSW, Licensed Clinical Social Worker in Venice Beach, CA, with her dog, Marshall"
                width={480}
                height={720}
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
                Most of my clients aren&apos;t in crisis — they&apos;re
                successful by every visible measure. What brings them in is
                quieter: the sense that they&apos;re managing their life more
                than living it.
              </p>
              <p className="text-stone-gray leading-relaxed mb-8">
                I bring a warm, direct approach grounded in evidence-based
                practice, and a genuine belief that you don&apos;t have to
                have it all figured out to start.
              </p>
              <Link href="/about" className="btn-primary">
                More About Me &amp; My Approach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-soft-sage py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-3">
              What clients say
            </h2>
            <p className="text-stone-gray text-sm">
              4.9 rating · Verified reviews from Grow Therapy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, attribution, detail }) => (
              <div key={attribution + detail} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="text-xs font-semibold text-charcoal">{attribution}</p>
                  <p className="text-xs text-stone-gray">{detail}</p>
                </div>
              </div>
            ))}
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
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
