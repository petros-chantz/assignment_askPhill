interface FilterProperties {
  price: any;
  material: any;
}

export const filters: FilterProperties = {
  price: [
    { value: "0", label: "$0 - $100", checked: false },
    { value: "25", label: "$200 - $300", checked: false },
    { value: "50", label: "$300 - $400", checked: false },
    { value: "75", label: "500+", checked: false },
  ],
  material: [
    { value: "soft", label: "soft", checked: false },
    { value: "cotton", label: "cotton", checked: false },
    { value: "wood", label: "wood", checked: false },
    { value: "plastic", label: "plastic", checked: false },
    { value: "bronze", label: "bronze", checked: false },
  ],
};

export const productColors: string[] = [
  "bg-red-300",
  "bg-sky-300",
  "bg-amber-300",
  "bg-green-300",
];

interface InfoDetailsProperties {
  title: string;
  details: Array<string>;
}

export const InfoDetails: InfoDetailsProperties[] = [
  {
    title: "company",
    details: [
      "about us",
      "stocklist",
      "careers",
      "press",
      "csr",
      "contact",
      "site map",
    ],
  },
  {
    title: "find a store",
    details: [
      "london",
      "paris",
      "barcelona",
      "new york",
      "copenhagen",
      "by studio appointment",
    ],
  },
  {
    title: "customer service",
    details: [
      "shipping info",
      "terms and conditions",
      "returns",
      "ordering",
      "shoe care",
      "size guide",
      "faq's",
    ],
  },
  {
    title: "assistance",
    details: [
      "call",
      "email",
      "live chat",
      "legal & cookies",
      "privacy policy",
      "terms and conditions",
      "transparency in the supply chain",
    ],
  },
];
