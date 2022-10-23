export const Color = () => {
  const productColors: string[][] = [
    ["bg-red-400", "focus:ring-red-400", "text-red-400"],
    ["bg-sky-400", "focus:ring-sky-400", "text-sky-400"],
    ["bg-amber-400", "focus:ring-amber-400", "text-amber-400"],
    ["bg-green-400", "focus:ring-green-400", "text-green-400"],
  ];

  return (
    <div className="flex flex-col gap-5">
      <p>color</p>
      <div className="flex flex-row gap-2">
        {productColors.map(([color, focus, text]) => (
          <input
            id={`color-${color}`}
            aria-describedby={`color-${color}-description`}
            name={`color-${color}`}
            type="checkbox"
            className={`h-5 w-5 rounded-full ${color} ${focus} ${text}`}
          />
        ))}
      </div>
    </div>
  );
};
