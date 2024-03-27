import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CPE-E-Library",
    template: "%s | CPE-E-Library",
  },
  description:
    "A digital library for CPE students to access course materials, notes, and more.",
  authors: [{ name: "Retrodevs" }],
  openGraph: {
    title: { default: "CPE-E-Library", template: "%s | CPE-E-Library" },
    description:
      "A digital library for CPE students to access course materials, notes, and more.",
    images: "",
    siteName: "CPE-E-Library",
    url: "",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: { default: "CPE-E-Library", template: "%s | CPE-E-Library" },
    description:
      "A digital library for CPE students to access course materials, notes, and more.",
    creator: "RetroDevs",
    images: [
      "https://www.pexels.com/photo/grayscale-photo-of-bicycle-beside-seashore-103523/",
    ], // Must be an absolute URL
  },
  metadataBase: new URL(
    "https://www.pexels.com/photo/grayscale-photo-of-bicycle-beside-seashore-103523/"
  ),
  icons: { shortcut: ["/favicon.ico"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
