import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoShow Predictor – Optimize Healthcare Scheduling",
  description: "Predict patient no-shows to optimize scheduling, reduce revenue loss, and target reminders effectively."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2408cc93-1737-4a3f-bf78-753b55ea7cf0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
