import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://brigitjacoby.com"),
  title: {
    default:
      "Brigit Jacoby, LCSW | Anxiety Therapist in Los Angeles & Santa Monica",
    template: "%s | Brigit Jacoby, LCSW",
  },
  description:
    "Virtual therapy for high-achieving adults in Los Angeles. Specializing in anxiety, people-pleasing, and authentic relationships. Book a free 20-minute consultation.",
  keywords: [
    "anxiety therapist Los Angeles",
    "therapist for high achievers",
    "people-pleasing therapy Santa Monica",
    "virtual therapy California",
    "LCSW Santa Monica",
    "therapy for anxiety Westside LA",
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
      "Brigit Jacoby, LCSW | Anxiety Therapist in Los Angeles & Santa Monica",
    description:
      "Virtual therapy for high-achieving adults in Los Angeles. Specializing in anxiety, people-pleasing, and authentic relationships.",
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
    "Virtual therapy for high-achieving adults in California specializing in anxiety and people-pleasing.",
  url: "https://brigitjacoby.com",
  telephone: "(415) 439-0499",
  email: "brigit@goldengatetherapy.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Venice Beach",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: "California",
  priceRange: "$$",
  medicalSpecialty: "Psychiatry",
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
