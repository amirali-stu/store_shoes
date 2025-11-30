import Navigation from "@/components/templates/Account/Navigation";

export default function RootLayoutUserDashboard({ children }) {
  return (
    <div className="flex relative items-start justify-center max-md:flex-col max-md:gap-y-4 gap-x-4 max-w-7xl mx-auto font-sans-medium px-4 py-4">
      <Navigation />
      {children}
    </div>
  );
}
