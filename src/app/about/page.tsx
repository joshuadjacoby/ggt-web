import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const title = "About Brigit Jacoby, LCSW | Therapist for High Achievers";
const description =
  "Meet Brigit Jacoby, LCSW — a Licensed Clinical Social Worker in Venice Beach specializing in anxiety and people-pleasing therapy for high-achieving adults throughout California.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brigitjacoby.com/about",
    siteName: "Brigit Jacoby, LCSW",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

const issues = [
  "Anxiety and high-functioning stress",
  "People-pleasing and difficulty setting boundaries",
  "Finding and using your authentic voice",
  "Building deeper, more honest relationships",
  "Perfectionism and fear of failure or judgment",
  "Burnout and the loss of identity beyond achievement",
];

const credentials = [
  "Licensed Clinical Social Worker (LCSW #121726) — California",
  "Master of Social Work (MSW) — University of Southern California",
  "B.A. in Psychology and Social Behavior — UC Irvine",
  "Specialized training in anxiety, attachment, and relational therapy",
  "Currently accepting new clients for virtual sessions throughout California",
];

export default function About() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-warm-cream py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
                About Brigit
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-4 sm:mb-6">
                You don&apos;t have to perform here.
              </h1>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-4">
                That&apos;s the first thing I want you to know. Whatever version
                of yourself you bring to our sessions — the put-together one,
                the exhausted one, the one who doesn&apos;t have the right words
                yet — is exactly the right one.
              </p>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed">
                I became a therapist because I believe that the most meaningful
                thing a person can do is learn to be honest — with themselves,
                and with the people they love.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-2 lg:-inset-4 bg-soft-sage rounded-3xl rotate-2" />
                <Image
                  src="/brigit-venice-canal.jpg"
                  alt="Brigit Jacoby, LCSW, Licensed Clinical Social Worker, at the Venice canals in Venice Beach, CA"
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

      {/* Who I work with */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-6">
                Who I work with
              </h2>
              <p className="text-stone-gray leading-relaxed mb-4">
                I specialize in working with high-achieving adults —
                professionals, creatives, entrepreneurs, and anyone who has
                mastered the art of seeming fine. My clients are smart,
                self-aware, and often their own harshest critics.
              </p>
              <p className="text-stone-gray leading-relaxed mb-8">
                They come to therapy not because they&apos;re falling apart, but
                because something quieter is happening: a growing disconnection
                between who they are and how they&apos;re living.
              </p>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-charcoal mb-4">
                Issues I most often work with:
              </h3>
              <ul className="space-y-3">
                {issues.map((issue) => (
                  <li key={issue} className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-sage-teal" />
                    <span className="text-stone-gray text-sm leading-relaxed">
                      {issue}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-gray text-sm leading-relaxed mt-6">
                I also work with teens and their families.{" "}
                <Link
                  href="/teens"
                  className="text-sage-teal font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </p>
            </div>

            <div>
              <div className="bg-soft-sage rounded-2xl p-8">
                <h2 className="text-2xl font-bold italic text-charcoal mb-5">
                  My approach
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  I draw from a range of evidence-based modalities — including
                  Cognitive Behavioral Therapy (CBT), Acceptance and Commitment
                  Therapy (ACT), and attachment-based approaches — but what I
                  care about most is creating a relationship with you that feels
                  real.
                </p>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Therapy works when you feel safe enough to be honest, so
                  that&apos;s always where we start.
                </p>
                <p className="text-charcoal/80 leading-relaxed">
                  Sessions are virtual, which means you can show up from
                  wherever you&apos;re most comfortable — your home, your
                  office, your car in a parking lot between meetings. No
                  commute. No waiting room. Just space for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-warm-cream py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold italic text-charcoal mb-8 text-center">
            Credentials
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ul className="space-y-4">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-soft-sage flex items-center justify-center">
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
                    {cred}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-teal py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-white mb-5">
            I&apos;d love to connect.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            If anything on this page resonated with you, that&apos;s usually a
            sign worth listening to. Reach out — there&apos;s no pressure, no
            commitment.
          </p>
          <Link href="/contact" className="btn-white">
            Schedule a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
