import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "William Hope - Obra Social",
  description: "Estar cerca, es salud. William Hope, tu obra social de confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Fondo global */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 5% 10%,  rgba(25,97,172,0.10)  0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 95% 0%,  rgba(0,164,184,0.08)  0%, transparent 65%),
              radial-gradient(ellipse 55% 45% at 85% 90%, rgba(167,58,141,0.08) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 10% 95%, rgba(49,38,100,0.06)  0%, transparent 60%),
              #ffffff
            `,
          }}
          aria-hidden="true"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
