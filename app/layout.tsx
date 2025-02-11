import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth0 Next.js Starter Template",
  description: "A Next.js 15 + Auth0 template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider> {/* 👈 Ensures Auth0 session is available */}
      </body>
    </html>
  );
}
