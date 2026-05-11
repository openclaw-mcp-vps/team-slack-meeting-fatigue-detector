import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeting Fatigue Detector — Slack AI Insights",
  description: "Detect meeting fatigue patterns in Slack conversations. AI-powered insights for team leads and HR managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6c4b139a-1208-4df8-99e5-1f23e13362db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
