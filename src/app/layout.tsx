import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Lora, Spectral, Archivo, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { OfflineRegistrar } from "@/components/offline-registrar";
import { GlobalImageZoom } from "@/components/global-image-zoom";
import { SearchScroll } from "@/components/search-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

// War-redesign skin fonts (Spectral serif / Archivo UI / Spline Sans Mono meta).
// Loaded app-wide so the new hamburger skin can roll out beyond war later;
// currently consumed only inside `.war-skin`.
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#22201e",
};

export const metadata: Metadata = {
  title: "Stuff Happened",
  description: "Long-form historical narratives, one civilization at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${spectral.variable} ${archivo.variable} ${splineMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{localStorage.removeItem('textSize');var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#f5f0e8')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-foreground">
        <OfflineRegistrar />
        <div className="app-shell">{children}</div>
        <GlobalImageZoom />
        <SearchScroll />
      </body>
    </html>
  );
}
