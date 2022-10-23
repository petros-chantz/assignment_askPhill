interface FilterProperties {
  price: any;
  category: any;
}

export const filters: FilterProperties = {
  price: [
    { value: "0", label: "$0 - $100", checked: false },
    { value: "25", label: "$200 - $300", checked: false },
    { value: "50", label: "$300 - $400", checked: false },
    { value: "75", label: "500+", checked: false },
  ],
  category: [
    { value: "all-new-arrivals", label: "All New Arrivals", checked: false },
    { value: "tees", label: "Tees", checked: false },
    { value: "objects", label: "Objects", checked: false },
    { value: "sweatshirts", label: "Sweatshirts", checked: false },
    { value: "pants-and-shorts", label: "Pants & Shorts", checked: false },
  ],
};
