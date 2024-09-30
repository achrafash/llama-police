import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Open Source LLM Tools",
    description: "1200+ AI tools classified",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
