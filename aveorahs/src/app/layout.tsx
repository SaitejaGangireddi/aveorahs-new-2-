import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aveorahs Interiors | Luxury Interior Design Studio Hyderabad",
  description:
    "Aveorahs Interiors is a bespoke interior design and architectural studio in Kondapur, Hyderabad, led by Veenasree Reddy. Specializing in luxury residential and turnkey execution.",
  verification: {
    google: "qBnDD2nHmYVlDSTOxpfvgYH0ZDbeSxs6toHUTbzvTSI",
  },
  keywords: [
    "Aveorahs",
    "Aveorahs Interiors",
    "Aveorahs Interior Studio",
    "Interior Designer Kondapur",
    "Luxury Interior Studio Hyderabad",
    "Veenasree Reddy",
  ],
  alternates: {
    canonical: "https://aveorahs.in",
  },
  openGraph: {
    title: "Aveorahs Interiors | Luxury Interior Design Studio",
    description:
      "Bespoke quiet luxury residential interiors and architectural design in Kondapur, Hyderabad.",
    url: "https://aveorahs.in",
    siteName: "Aveorahs Interiors",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aveorahs Interiors",
  alternateName: ["Aveorahs", "Aveorahs Interior Studio"],
  image:
    "https://res.cloudinary.com/dmkjnuolr/image/upload/v1786282450/ChatGPT_Image_Aug_9_2026_07_04_02_PM_fixs2k.png",
  url: "https://aveorahs.in",
  telephone: "+918790490909",
  email: "aveorahs@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6th Floor, Shresta Square Building, Opposite TCC",
    addressLocality: "Kondapur",
    addressRegion: "Telangana",
    postalCode: "500084",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/aveorahs_interiors",
  ],
  founder: {
    "@type": "Person",
    name: "Veenasree Reddy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="qBnDD2nHmYVlDSTOxpfvgYH0ZDbeSxs6toHUTbzvTSI"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#241815] text-[#FDFBF7] antialiased selection:bg-[#C98242] selection:text-white">
        {children}
      </body>
    </html>
  );
}