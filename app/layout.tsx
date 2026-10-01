import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIKLINK | Technology. Creative. Connected.",
  description:
    "Web development, creative design, printing, IT support and digital solutions for ambitious businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
