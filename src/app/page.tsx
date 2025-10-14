import {Button} from "~/components/ui/button";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-100">
            <main className="flex flex-1 flex-col">
                <section
                    className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 py-24 text-center">
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
                            <Link href="/sacc" className="gap-2">
                                <span>Learn More</span>
                                <ExternalLink className="h-6 w-6" aria-hidden="true"/>
                            </Link>
                        </Button>
                    </div>
                </section>
                <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-24">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-bold">Who Are We?</h2>
                        <p>We are a student ran organization focusing on coding in the Seattle Area.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
