export const Color = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>color</p>
      <div className="flex flex-row gap-2">
        {["blue", "yellow", "red"].map((color) => (
          <input
            id={`color-${color}`}
            aria-describedby={`color-${color}-description`}
            name={`color-${color}`}
            type="checkbox"
            className={`h-5 w-5 rounded-full border-${color}-300 text-${color}-700 focus:ring-slate-500`}
          />
        ))}
      </div>
    </div>
  );
};
