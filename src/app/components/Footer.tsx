import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-semibold text-lg mb-1">Brigit Jacoby, LCSW</p>
            <p className="text-stone-gray text-sm mb-4">
              Licensed Clinical Social Worker #121726
            </p>
            <p className="text-stone-gray text-sm leading-relaxed">
              Venice Beach therapist serving Santa Monica, Marina del Rey, Mar
              Vista, Brentwood, and the LA Westside — plus virtual sessions
              throughout California.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-gray mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/teens", label: "Teens & Families" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-stone-gray hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + PT badge */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-gray mb-4">
              Get in Touch
            </p>
            <p className="text-sm text-stone-gray mb-1">
              <a
                href="mailto:brigit@goldengatetherapy.com"
                className="hover:text-white transition-colors"
              >
                brigit@goldengatetherapy.com
              </a>
            </p>
            <p className="text-sm text-stone-gray mb-6">
              <a href="tel:3105611461" className="hover:text-white transition-colors">
                (310) 561-1461
              </a>
            </p>
            <a
              href="https://www.psychologytoday.com/profile/1352154"
              className="sx-verified-seal"
              aria-label="Psychology Today Verified"
            />
            <script
              type="text/javascript"
              src="https://member.psychologytoday.com/verified-seal.js"
              data-badge="14"
              data-id="1352154"
              data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzEzNTIxNTQ/Y2FsbGJhY2s9c3hjYWxsYmFjaw=="
              defer
            />
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-gray">
          <p>
            &copy; {new Date().getFullYear()} Brigit Jacoby, LCSW. All rights
            reserved.
          </p>
          <p>
            Venice Beach, CA · Serving Santa Monica, Marina del Rey, Mar
            Vista &amp; Brentwood · Virtual throughout California
          </p>
        </div>
      </div>
    </footer>
  );
}
