import type { Metadata } from "next";
import MainHeader from "./components/MainHeader";
import SessionWrapper from "./components/SessionWrapper";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hello Logistic",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          <MainHeader />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
