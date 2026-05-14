export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NXπ",
    description:
      "The Enterprise AI Operations Platform — connecting SAP, Salesforce, and every enterprise data source through governed AI agents.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Self-hosted",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for enterprise pricing",
    },
  };
}

export function generateArticleSchema(title: string, description: string, date: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "NXπ",
    },
    publisher: {
      "@type": "Organization",
      name: "Negentrophi",
      logo: {
        "@type": "ImageObject",
        url: "https://nxpi.ai/brand/logo.svg",
      },
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
