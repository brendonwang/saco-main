import Link from "next/link";
import {ExternalLink} from "lucide-react";

import {Button} from "~/components/ui/button";

export const HeroSection = () => {
    return (
        <section
            id="event"
            className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-24 text-center"
        >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                SACC 2025
            </h1>
            <div className="mt-10 flex flex-col gap-4 md:gap-10 md:flex-row">
                <Button className="bg-blue-500 text-xl py-6" size="lg" asChild>
                    <Link href="mailto:info@saco.org?subject=SACC%202025%20Registration">
                        Register
                    </Link>
                </Button>
                <Button size="lg" className="text-xl py-6" variant="outline" asChild>
                    <Link href="#about" className="gap-2">
                        <span>Learn More</span>
                        <ExternalLink className="h-6 w-6" aria-hidden="true"/>
                    </Link>
                </Button>
            </div>
        </section>
    );
};
