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

export const Info = () => {
  return (
    <div className="flex flex-col px-10 py-10 lg:self-center lg:gap-32 lg:px-32 lg:flex-row ">
      {InfoDetails.map((info) => {
        return (
          <div className="flex flex-col self-start justify-start h-full gap-5">
            <p>{info.title}</p>
            <div className="flex-col hidden gap-1 lg:flex">
              {info.details.map((keyword, index) => (
                <p className="cursor-pointer hover:underline" key={index}>
                  {keyword}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
