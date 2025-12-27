export default function ShowColors({
  colors,
  selectedColorId,
  setSelectedColorId,
}) {
  return (
    <div className="flex items-center gap-3">
      {colors.map((color) => {
        const isSelected = String(selectedColorId) === String(color.value);

        return (
          <button
            key={color.value}
            type="button"
            onClick={() => setSelectedColorId(color.value)}
            aria-label={color.name}
            className={`
                relative w-9 h-9 rounded-full transition
                flex items-center justify-center
              
                ${
                  isSelected
                    ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900"
                    : "ring-1 ring-zinc-500 dark:ring-slate-700"
                }
              `}
          >
            <span
              className={`
                  absolute inset-1 rounded-full
                  ${color.class}
                `}
              style={{ backgroundColor: color.hexCode }}
            />

            {isSelected && (
              <span className="relative z-10 text-white text-sm font-bold">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
