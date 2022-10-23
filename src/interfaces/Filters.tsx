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
