import localFont from "next/font/local";

export const SanaRegular = localFont({
  src: "../../public/fonts/Sans-Regular.ttf",
  variable: "--font-sana-regular",
});

export const SanaMedium = localFont({
  src: "../../public/fonts/Sans-Medium.ttf",
  variable: "--font-sana-medium",
});

export const SanaBold = localFont({
  src: "../../public/fonts/Sans-Bold.ttf",
  variable: "--font-sana-bold",
});

export const SanaDemiBold = localFont({
  src: "../../public/fonts/Sans-DemiBold.ttf",
  variable: "--font-sana-demibold",
});

export const YekanRegular = localFont({
  src: "../../public/fonts/YekanBakh-Regular.ttf",
  variable: "--font-yekan-regular",
});

export const YekanMedium = localFont({
  src: "../../public/fonts/YekanBakh-Medium.ttf",
  variable: "--font-yekan-medium",
});

export const YekanBold = localFont({
  src: "../../public/fonts/YekanBakh-Bold.ttf",
  variable: "--font-yekan-bold",
});

export const fonts = [
  SanaRegular.variable,
  SanaMedium.variable,
  SanaBold.variable,
  SanaDemiBold.variable,
  YekanRegular.variable,
  YekanMedium.variable,
  YekanBold.variable,
];
