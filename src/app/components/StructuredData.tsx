import Script from 'next/script';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Sergio Murillo",
    "description": "Cirujano Gastroenterólogo con más de 35 años de experiencia en Nogales, Arizona.",
    "medicalSpecialty": "Gastroenterology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alvaro Obregon 19-Suite E",
      "addressLocality": "Nogales",
      "addressRegion": "Sonora",
      "postalCode": "84030 ",
      "addressCountry": "MX"
    },
    "telephone": "+526311260958",
    "url": "https://www.gastroenterologosergiomurilo.com",
    "image": "https://www.gastroenterologosergiomurilo.com/favicon.ico",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Endoscopy"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Colonoscopy"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Surgery"
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
