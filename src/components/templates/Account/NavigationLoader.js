export function NavigationLoader() {
  return (
    <div
      className=" max-md:fixed max-md:bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:h-14 max-md:w-[95%]  max-md:bg-gray-100/20 max-md:mb-4 z-50 max-md:flex max-md:items-center max-md:justify-center max-md:border-2 max-md:border-gray-100
        max-md:backdrop-blur-lg md:flex flex-col border-2 border-gray-100 md:w-[313px] md:h-[418px] animate-pulse rounded-xl p-4 gap-4"
    >
      <div className="max-md:hidden md:flex flex-col gap-y-4 mt-4">
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-300/50 w-2/4 h-4 animate-pulse rounded-md"></div>
      </div>
      <div className="md:hidden w-full max-md:flex justify-between items-center">
        <div className="w-9 h-9  rounded-full bg-neutral-400/50"></div>
        <div className="w-9 h-9  rounded-full bg-neutral-400/50"></div>
        <div className="w-9 h-9  rounded-full bg-neutral-400/50"></div>
        <div className="w-9 h-9  rounded-full bg-neutral-400/50"></div>
        <div className="w-9 h-9  rounded-full bg-neutral-400/50"></div>
      </div>
    </div>
  );
}
