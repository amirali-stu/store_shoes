import React from "react";

export default function RootLayoutUserDashboard({ children }) {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <div className="w-[400px] h-[400px] p-4 bg-gray-50 border-2 border-gray-100 rounded-lg">
        hello world
      </div>
      {children}
    </div>
  );
}
