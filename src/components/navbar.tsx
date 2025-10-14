"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Button} from "~/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "~/components/ui/navigation-menu";
import {cn} from "~/lib/utils";

type NavLink = {
    label: string;
    href: string;
};

const HamburgerIcon = ({
                           className,
                           ...props
                       }: React.SVGAttributes<SVGElement>) => (
    <svg
        className={cn("pointer-events-none", className)}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
        />
        <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
        />
    </svg>
);

export const Navbar = ({nav_links}: { nav_links: NavLink[] }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Auto-close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Close on ESC key
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="logo" width={30} height={30}/>
                    <span className="text-2xl sm:text-4xl font-medium">SACO</span>
                </Link>

                {/* Desktop navigation */}
                <NavigationMenu className="hidden sm:flex">
                    {nav_links.map((link) => (
                        <NavigationMenuItem key={link.label}>
                            <NavigationMenuLink asChild>
                                <Button variant="ghost" asChild>
                                    <Link href={link.href} className="px-2 py-1">
                                        {link.label}
                                    </Link>
                                </Button>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenu>

                {/* Mobile toggle */}
                <div className="sm:hidden">
                    <Button
                        size="icon"
                        variant="ghost"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((o) => !o)}
                        className="group transition-transform duration-300"
                    >
                        <HamburgerIcon/>
                    </Button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {/* TODO: Fix Mobile Menu display */}
            <div
                id="mobile-menu"
                className={cn(
                    "sm:hidden overflow-hidden border-t border-neutral-200 bg-white transition-[max-height,opacity] duration-300 ease-out absolute",
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="mx-auto w-full max-w-6xl px-4 sm:px-10 py-2">
                    <ul className="flex flex-col">
                        {nav_links.map((link) => (
                            <li key={link.label}>
                                <Button variant="ghost" className="justify-start" asChild>
                                    <Link
                                        href={link.href}
                                        className="block w-full text-left"
                                    >
                                        {link.label}
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
