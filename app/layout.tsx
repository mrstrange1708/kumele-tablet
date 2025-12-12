import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kumele - History & Statistics",
    description: "Track your meditation progress and achievements",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
