import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "@/public/assets/globals.css"
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants/index";


const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {

  title: {
    template: "%s | Prostore",
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
