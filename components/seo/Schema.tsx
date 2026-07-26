type SchemaProps = {
  siteUrl: string;
};

export default function Schema({ siteUrl }: SchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Purvex Tech Studio",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    email: "infopurvextechstudio@gmail.com",

    description:
      "AI-powered digital agency providing Website Development, AI Automation, Business Automation, SEO, AEO, GEO Optimization, ATS Resume Writing, LinkedIn Optimization and Business Growth.",

    sameAs: [
      "https://www.linkedin.com/company/purvex-tech-studio",
      "https://www.instagram.com/purvextechstudio",
      "https://www.tiktok.com/@purvextechstudio",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      email: "infopurvextechstudio@gmail.com",
      contactType: "Customer Support",
      availableLanguage: ["English"],
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO • GEO • AEO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Branding",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Purvex Tech Studio",
    url: siteUrl,
    description:
      "AI-powered digital agency offering Website Development, AI Automation, SEO, AEO, GEO and Business Growth.",
    inLanguage: "en",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professionalservice`,
    name: "Purvex Tech Studio",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    priceRange: "$$",
    description:
      "Premium AI-powered digital agency delivering Website Development, AI Automation, Business Automation, Shopify Development, SEO, AEO and GEO Optimization services worldwide.",
    areaServed: [
      "Pakistan",
      "Dubai",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
    ],
    serviceType: [
      "Website Development",
      "AI Automation",
      "Business Automation",
      "SEO",
      "AEO",
      "GEO Optimization",
      "ATS Resume Writing",
      "LinkedIn Optimization",
    ],
    email: "infopurvextechstudio@gmail.com",
    sameAs: [
      "https://www.linkedin.com/company/purvex-tech-studio",
      "https://www.instagram.com/purvextechstudio",
      "https://www.tiktok.com/@purvextechstudio",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}