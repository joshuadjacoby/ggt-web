import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Therapy Services | Anxiety, People-Pleasing & Boundaries | Los Angeles",
  description:
    "Individual therapy for high-achieving adults. Brigit Jacoby, LCSW offers virtual sessions throughout California for anxiety, people-pleasing, boundaries, and authentic relationships.",
};

const services = [
  {
    id: "anxiety",
    title: "Anxiety & High-Functioning Stress",
    subtitle: "For the person who can't seem to slow down",
    body: "Anxiety doesn't always look like panic attacks. For high achievers, it often shows up as the inability to slow down, constant over-preparation, a nagging sense that the other shoe is about to drop, or the relentless feeling that you're not doing enough — even when you're doing everything. We'll work to understand what your anxiety is trying to protect you from, and help you build a different relationship with it.",
    keywords: ["high-functioning anxiety therapy", "anxiety therapist Los Angeles"],
  },
  {
    id: "people-pleasing",
    title: "People-Pleasing & Boundaries",
    subtitle: "For the person who always puts everyone else first",
    body: "If you've spent your life making sure everyone else is okay — at the expense of your own needs, time, and sometimes sense of self — this work is for you. Together we'll explore where that pattern came from, what it's costing you, and how to start saying what you actually mean without the guilt spiral that usually follows.",
    keywords: ["people-pleasing therapy Santa Monica", "boundaries therapist Los Angeles"],
  },
  {
    id: "voice",
    title: "Finding Your Voice & Authentic Expression",
    subtitle: "For the person who's great at communicating but not at being heard",
    body: "There's a difference between communicating and being heard. A lot of my clients are excellent at the first one — articulate, persuasive, professional. But speaking honestly about what they feel, what they need, or what they disagree with? That's where it gets hard. We'll work on helping you find your voice and actually use it — in your relationships, your work, and with yourself.",
    keywords: ["authentic relationships therapy", "therapist for high achievers"],
  },
  {
    id: "relationships",
    title: "Relationships & Intimacy",
    subtitle: "For the person who craves deeper connection but keeps people at arm's length",
    body: "Authentic relationships require showing up as yourself — which is hard to do when you're not entirely sure who that is, or when vulnerability feels like a risk you're not willing to take. Whether you're navigating a partnership, a friendship, a family dynamic, or the longing for deeper connection, we'll work on building the kind of relationships where you can actually be known.",
    keywords: ["virtual therapy California", "LCSW Santa Monica"],
  },
];

const whatToExpect = [
  "50-minute individual sessions via secure video platform",
  "Flexible scheduling including some evening availability",
  "Collaborative, conversational therapy — not cookie-cutter homework",
  "Evidence-based approaches tailored to your specific goals",
  "Long-term partnership or short-term focused work, depending on your needs",
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-warm-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-6">
            Individual Therapy · Virtual · Throughout California
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-6">
            Therapy for high-achieving adults who are ready to stop performing
            and start living.
          </h1>
          <p className="text-base sm:text-lg text-stone-gray leading-relaxed max-w-2xl mx-auto">
            I offer individual therapy for adults throughout California via
            secure, confidential video sessions. Every client is different, and
            your sessions will be shaped around you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map(({ id, title, subtitle, body }) => (
              <div
                key={id}
                id={id}
                className="border border-gray-100 rounded-2xl p-8 scroll-mt-20"
              >
                <div className="w-8 h-1 bg-sage-teal rounded mb-5" />
                <h2 className="text-2xl sm:text-3xl font-bold italic text-charcoal mb-2">
                  {title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-widest text-stone-gray mb-5">
                  {subtitle}
                </p>
                <p className="text-stone-gray leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-soft-sage py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold italic text-charcoal mb-6">
                What to expect
              </h2>
              <ul className="space-y-4">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-sage-teal"
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
                    <span className="text-charcoal text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold italic text-charcoal mb-6">
                Investment
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-stone-gray leading-relaxed mb-4">
                  I am an out-of-network provider. A superbill can be provided
                  for potential reimbursement through your insurance&apos;s
                  out-of-network benefits. I recommend checking with your
                  provider before our first session.
                </p>
                <p className="text-stone-gray leading-relaxed mb-4">
                  Limited sliding scale spots are available. Please reach out to
                  ask about availability.
                </p>
                <p className="text-xs text-stone-gray italic">
                  Not sure if therapy is right for you right now? That&apos;s
                  okay — the consultation is a no-pressure conversation, not a
                  commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-teal py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-white mb-5">
            Ready to get started?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Book a free 20-minute consultation. No pressure, no commitment —
            just a chance to see if we&apos;re a good fit.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Free 20-Minute Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
