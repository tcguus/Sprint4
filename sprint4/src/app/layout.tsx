import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phygital Porto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/porto.ico/" />
        <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
