import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal de Datos CMPC",
  description: "Portal de datos para CMPC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          src="https://cdn.weglot.com/weglot.min.js"
          strategy="beforeInteractive"
        />
        <Script id="weglot-init" strategy="afterInteractive">
          {`
            Weglot.initialize({
              api_key: 'wg_3cff57e9c6541fe1f5e506dc779ba61e6'
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
