
function insertJSONLD(jsonLD) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLD);
    document.head.appendChild(script);
}

// Актикул
insertJSONLD({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Как создаются сладости CandyCraft",
  "datePublished": "2026-03-01T10:00:00+03:00",
  "author": {
    "@type": "Person",
    "name": "CandyCraft Team"
  }
});

// Продукт
insertJSONLD({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Авторский шоколад CandyCraft",
  "image": "https://ir.ozone.ru/s3/multimedia-q/6549479006.jpg",
  "description": "Натуральный шоколад ручной работы с уникальными вкусами",
  "brand": {
    "@type": "Brand",
    "name": "CandyCraft"
  },
  "offers": {
    "@type": "Offer",
    "price": "1200",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "300",
        "currency": "RUB"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "RU"
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14
    }
  }
});

// Локальный бизнес
insertJSONLD({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CandyCraft",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Примерная, д. 1",
    "addressLocality": "Москва"
  },
  "telephone": "+7 (900) 000-00-00"
});