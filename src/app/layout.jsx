import '../assets/css/main.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Cursor from '../components/home/Cursor';
import ScrollAnimations from '../components/scrollAnimations/ScrollAnimations';
import ScrollWhatsapp from "../components/home/ScrollWhatsapp";

import Script from "next/script";

export const metadata = {
  title: {
    default: "Varixia | Best Web Design & Software Company in Kochi | Mobile App Development Kerala",
    template: "%s | Varixia - Top IT Company in Kochi, Kerala",
  },

  description:
    "Varixia is a leading web design, software development, omni-channel solutions, and mobile app development company in Kochi, Kerala. We build scalable websites, apps, and digital products for startups and enterprises.",

  keywords: [
    "best web design company in kochi",
    "software company in kochi",
    "mobile app development company in kerala",
    "omni channel company in kochi",
    "web development company kochi",
    "IT company in kochi kerala",
    "ecommerce development kochi",
    "UI UX design company kochi",
    "custom software development kerala",
    "digital transformation company kochi",
  ],

  authors: [{ name: "Varixia" }],
  creator: "Varixia",
  publisher: "Varixia",

  icons: {
    icon: "/images/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://varixia.com/",
  },

  verification: {
    google: "qLW6AghHvA83FQP13m740qPwopRIDSlv6L94EelVggg",
  },

  openGraph: {
    title: "Best Web Design & Software Company in Kochi, Kerala | Varixia",
    description:
      "Top-rated web design, software development, omni-channel & mobile app development company in Kochi, Kerala.",
    url: "https://varixia.com/",
    siteName: "Varixia",
    images: [
      {
        url: "https://varixia.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Design & Software Company in Kochi - Varixia",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Web Design & Software Company in Kochi | Varixia",
    description:
      "Expert web design, software development, omni-channel & mobile app solutions in Kochi, Kerala.",
    images: ["https://varixia.com/images/og-image.jpg"],
    creator: "@varixia",
  },

  category: "Technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SoftwareCompany", "ProfessionalService"],
  "@id": "https://varixia.com/#business",
  "name": "Varixia",
  "url": "https://varixia.com/",
  "logo": "https://varixia.com/images/logo.png",
  "image": "https://varixia.com/images/og-image.jpg",
  "description": "Leading web design, software development, omni-channel solutions, and mobile app development company in Kochi, Kerala. We help startups and enterprises build scalable digital products.",
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "postalCode": "682XXX",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.931233,
    "longitude": 76.267303
  },
  "areaServed": {
    "@type": "Place",
    "name": "Kerala, India"
  },
  "sameAs": [
    "https://www.facebook.com/varixiatech",
    "https://www.instagram.com/varixia_",
    "https://www.linkedin.com/company/varixia",
    "https://twitter.com/varixia"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Responsive, SEO-friendly websites and web applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Development",
          "description": "Custom software solutions for startups and enterprises."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Android & iOS mobile app development using modern technologies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Omni-channel Solutions",
          "description": "Integrated omni-channel platforms for retail and enterprises."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User-centered UI/UX design for web and mobile applications."
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5NGNNJM9');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NGNNJM9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Cursor />
        <Navbar />
        <ScrollAnimations />

        {children}

        <Footer />
        <ScrollWhatsapp />
      </body>
    </html>
  );
}
