export default function ShowSizes({
  sizeRangeArray,
  sizeInfoByValue,
  selectedSize,
  setSelectedSize,
  setInventory,
}) {
  return (
    <div className="flex items-center gap-2">
      {sizeRangeArray.map((sz) => {
        const key = String(sz);

        const info = sizeInfoByValue.get(key);
        const count = info?.count ?? 0;
        const isDisabled = count < 1;
        const isSelected = String(selectedSize) === key;

        return (
          <button
            key={key}
            disabled={isDisabled}
            onClick={() => {
              setSelectedSize(key);
              setInventory(count);
            }}
            className={`
            flex-1 py-2 rounded-lg font-medium transition border
            ${
              isDisabled
                ? "bg-gray-50 dark:bg-slate-900 cursor-not-allowed text-gray-400 dark:text-slate-500 border-gray-200 dark:border-slate-800"
                : isSelected
                ? "border-slate-900 shadow-lg shadow-slate-900/20 dark:border-gray-300 bg-slate-900 dark:bg-white text-white dark:text-black"
                : "bg-transparent cursor-pointer text-black dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-gray-200 dark:hover:text-white"
            }
          `}
          >
            {sz}
          </button>
        );
      })}
    </div>
  );
}
