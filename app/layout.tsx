import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galeri Seni Indonesia",
  description: "Platform marketplace karya seni terpercaya di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-amber-900 text-amber-50 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 - <span className="font-semibold">DaffaADS</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
