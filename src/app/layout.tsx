import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/tailwind.css";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { getContentProvider } from "../lib/content/provider";

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
  title: "BRASA Platform",
  description:
    "An artful learning library of clear, modern guides and mentor-led lessons for ambitious builders.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const provider = getContentProvider();
  const siteShell = await provider.getSiteShellContent();

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-body`}>
        <div className="min-h-screen bg-surface text-foreground">
          <Header content={siteShell.navigation} />
          <div className="grain">
            <main>{children}</main>
          </div>
          <Footer content={siteShell.footer} />
        </div>
      </body>
    </html>
  );
}
