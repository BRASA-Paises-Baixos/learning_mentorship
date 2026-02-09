import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/tailwind.css";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BRASA Netherlands",
  description:
    "An artful learning library of clear, modern guides and mentor-led lessons for ambitious builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-body`}
      >
        <div className="min-h-screen bg-canvas text-charcoal">
          <Header />
          <div className="grain">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
