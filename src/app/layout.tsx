import type {Metadata} from "next";

import "~/styles/globals.css";

const title = "SACO | SACC 2025";
const description =
    "Seattle Area Coding Organization (SACO) hosts SACC 2025, empowering student coders across the Seattle area.";

export const metadata: Metadata = {
    title: {
        default: title,
        template: "%s | SACO"
    },
    description,
    applicationName: "SACO",
    keywords: ["SACO", "SACC 2025", "Seattle coding", "student organization", "tech event"],
    authors: [{name: "SACO"}],
    creator: "SACO",
    metadataBase: new URL("https://saco.org"),
    openGraph: {
        title,
        description,
        type: "website",
        siteName: "SACO",
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        title,
        description
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
        </body>
        </html>
    );
}
