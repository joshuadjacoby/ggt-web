import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://brigitjacoby.com"),
  title: {
    default:
      "Brigit Jacoby, LCSW | Anxiety & Burnout Therapist in Venice Beach, CA",
    template: "%s | Brigit Jacoby, LCSW",
  },
  description:
    "Virtual therapy for high-achieving adults, teens, and the families supporting them in Venice Beach, Santa Monica, and Los Angeles. Specializing in anxiety, burnout, people-pleasing, and authentic relationships. Book a free 20-minute consultation.",
  keywords: [
    "anxiety therapist Venice Beach",
    "burnout therapist Venice Beach",
    "therapist Venice Beach CA",
    "anxiety therapist Los Angeles",
    "burnout recovery Los Angeles",
    "therapist for high achievers",
    "people-pleasing therapy Santa Monica",
    "virtual therapy California",
    "LCSW Santa Monica",
    "boundaries therapist Los Angeles",
    "high-functioning anxiety therapy",
    "authentic relationships therapy",
    "Brigit Jacoby LCSW",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brigitjacoby.com",
    siteName: "Brigit Jacoby, LCSW",
    title:
      "Brigit Jacoby, LCSW | Anxiety & Burnout Therapist in Venice Beach, CA",
    description:
      "Virtual therapy for high-achieving adults, teens, and the families supporting them in Venice Beach, Santa Monica, and Los Angeles. Specializing in anxiety, burnout, people-pleasing, and authentic relationships.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Brigit Jacoby, LCSW",
  description:
    "Virtual therapy for high-achieving adults, teens, and the families supporting them in Venice Beach and throughout California, specializing in anxiety, burnout, and people-pleasing.",
  url: "https://brigitjacoby.com",
  telephone: "(310) 561-1461",
  email: "brigit@goldengatetherapy.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Venice Beach",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Venice Beach" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Marina del Rey" },
    { "@type": "City", name: "Mar Vista" },
    { "@type": "City", name: "Playa Vista" },
    { "@type": "City", name: "Los Angeles" },
    { "@type": "State", name: "California" },
  ],
  priceRange: "$$",
  sameAs: ["https://www.psychologytoday.com/profile/1352154"],
  founder: {
    "@type": "Person",
    name: "Brigit Jacoby",
    jobTitle: "Licensed Clinical Social Worker",
    hasCredential: "LCSW #121726",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
