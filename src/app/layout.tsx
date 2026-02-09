import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Configuración premium de la fuente Geist (moderna y premium)
const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grailapp.dev"),
  title: "Grail: Tu Wishlist Inteligente",
  description: "Captura productos, rastrea precios y organiza tus deseos.",
  icons: {
    icon: "/favicon.png", // Asegúrate de tener esto en /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geist.variable} font-sans bg-white antialiased selection:bg-amber-100 selection:text-slate-900`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}