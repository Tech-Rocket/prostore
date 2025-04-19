// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Prostore",
//   description: "A modern e-commerce platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="flex h-screen flex-col">
            ROOT
            <main className="flex-1 wrapper">
            {children}
            </main>
        </div>
  );
}
