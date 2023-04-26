import "./css/style.css";

import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import { Inter, Architects_Daughter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const architects_daughter = Architects_Daughter({
    subsets: ["latin"],
    variable: "--font-architects-daughter",
    weight: "400",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <head>
                    <title>Next.js 13 with Clerk</title>
                </head>
                <body
                    className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
                >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
