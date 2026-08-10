import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teen & Family Therapy in Venice Beach, CA",
  description:
    "A therapist who asks questions and guides the process — not one who expects your teen to lead the conversation. Virtual and in-person sessions for teens and families in Venice Beach, Santa Monica, and Los Angeles.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brigitjacoby.com/teens",
    siteName: "Brigit Jacoby, LCSW",
    title: "Teen & Family Therapy in Venice Beach, CA",
    description:
      "A therapist who asks questions and guides the process — not one who expects your teen to lead the conversation. Virtual and in-person sessions for teens and families in Venice Beach, Santa Monica, and Los Angeles.",
    images: ["/og-image.jpg"],
  },
};

const fitItems = [
  "Your teen goes quiet the second things get hard, and you're tired of watching them shut down instead of talk.",
  "You've tried a therapist before who mostly listened and nodded, and your teen came out of it saying nothing changed.",
  "Your teen is high-achieving, anxious, or a perfectionist on the outside — and you suspect there's a lot more going on underneath that they're not showing you.",
  "You want a therapist who brings structure and direction to sessions, not one who leaves a teenager to figure out what to talk about on their own.",
  "You're not looking for a passive listening ear for your kid — you're looking for someone who will actively work with them.",
];

const helpItems = [
  "Anxiety and chronic overwhelm",
  "Perfectionism and the pressure to always have it together",
  "People-pleasing, difficulty setting boundaries, or trouble saying what they actually think",
  "Family conflict and communication breakdowns",
  "Shutting down, withdrawing, or going quiet under stress",
  "The early patterns — over-achieving to be seen, staying quiet to keep the peace — that, left unaddressed, tend to follow people straight into adulthood",
];

export default function Teens() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-warm-cream py-10 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-sage-teal uppercase mb-4">
                Teen &amp; Family Therapy · Venice Beach · Virtual &amp; In-Person
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold italic text-charcoal leading-tight mb-4 sm:mb-6">
                Someone who will actually talk to your teenager — not just sit
                with them.
              </h1>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-3">
                You&apos;re not looking for a therapist who fills the hour with
                silence and waits for your teen to fill it too. You want
                someone in the room who asks real questions, notices what&apos;s
                not being said, and doesn&apos;t expect a fifteen-year-old to run
                their own therapy session.
              </p>
              <p className="text-base sm:text-lg text-stone-gray leading-relaxed mb-6 sm:mb-10">
                That&apos;s how I work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book a Free Consultation →
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-2 lg:-inset-4 bg-soft-sage rounded-3xl -rotate-2" />
                <Image
                  src="/brigit-teens-hero.jpg"
                  alt="Brigit Jacoby, LCSW, teen and family therapist in Venice Beach, CA, sitting down for a conversation"
                  width={500}
                  height={625}
                  className="relative rounded-2xl shadow-xl object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This might be the right fit if... */}
      <section className="bg-soft-sage py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-4">
              This might be the right fit if...
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {fitItems.map((item, i) => (
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
        </div>
      </section>

      {/* What you can expect */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-8 text-center">
            What you can expect
          </h2>
          <div className="space-y-4">
            <p className="text-stone-gray leading-relaxed">
              Sessions with me are active, not passive. I ask questions. I
              bring in real tools — practical, concrete ways of working
              through anxiety, perfectionism, and the patterns that keep a
              teenager stuck — rather than waiting for an agenda to appear on
              its own.
            </p>
            <p className="text-stone-gray leading-relaxed">
              Neither you nor your teen have to worry about how to start or
              what to say — that&apos;s my job. I come in with a plan for how
              the process unfolds, and we find our own flow from there
              together. Sessions usually begin with me asking direct questions
              about what brought them to therapy, or what&apos;s keeping them
              here, so no one is left staring at each other wondering where to
              begin.
            </p>
            <p className="text-stone-gray leading-relaxed">
              I&apos;m also in regular contact with parents where appropriate,
              so you&apos;re not left guessing what&apos;s happening in the
              room — while still protecting the trust and privacy your teen
              needs to actually open up.
            </p>
          </div>
        </div>
      </section>

      {/* How I can help */}
      <section className="bg-warm-cream py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-8 text-center">
            How I can help
          </h2>
          <p className="text-stone-gray leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            I work with teens navigating:
          </p>
          <ul className="space-y-4 max-w-2xl mx-auto mb-10">
            {helpItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-sage-teal" />
                <span className="text-stone-gray leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <p className="text-charcoal/80 leading-relaxed">
              That last point matters to how I work. Much of my practice is
              built around high-achieving adults untangling anxiety and
              people-pleasing patterns that started decades earlier. I see the
              same patterns forming in the teenagers who will grow into them —
              and I&apos;d rather help address them now, with the same active,
              structured approach, than have someone spend their thirties
              undoing them.
            </p>
          </div>
        </div>
      </section>

      {/* About Brigit */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="hidden lg:block relative">
              <Image
                src="/brigit-teens-about.jpg"
                alt="Brigit Jacoby, LCSW, Licensed Clinical Social Worker in Venice Beach, CA"
                width={500}
                height={750}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold italic text-charcoal mb-5">
                About Brigit
              </h2>
              <p className="text-stone-gray leading-relaxed mb-4">
                I&apos;m a Licensed Clinical Social Worker (LCSW #121726) based
                in Venice Beach, with a Master of Social Work from USC and a
                background in anxiety, attachment, and relational therapy. My
                work with teens and families goes back further than my
                license does — it started with my first babysitting gig in
                2010, and became professional in 2017, when I worked in ABA,
                teaching independent living and social skills to individuals
                across the autism spectrum. I see teens and families both
                virtually and in person, including in their own homes and
                communities.
              </p>
              <p className="text-stone-gray leading-relaxed">
                Therapy only works when someone feels safe enough to be
                honest — that&apos;s true whether you&apos;re forty-five or
                fifteen. I bring the same directness and warmth to my work
                with teenagers that I bring to my adult clients: no
                performing, no pretending, and no sitting in silence waiting
                for someone else to lead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-teal py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold italic text-white mb-5">
            Ready to take the first step?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            If your teen needs a therapist who will actually engage with them
            — not just sit and listen — let&apos;s talk. I offer a free
            20-minute consultation, a relaxed, no-pressure conversation to see
            if this is the right fit for your family.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Free Consultation →
          </Link>
          <div className="mt-8 text-white/80 text-sm space-y-1">
            <p>
              <a
                href="mailto:brigit@goldengatetherapy.com"
                className="hover:text-white transition-colors"
              >
                brigit@goldengatetherapy.com
              </a>
            </p>
            <p>
              <a
                href="tel:3105611461"
                className="hover:text-white transition-colors"
              >
                (310) 561-1461
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
