import {AboutSection} from "~/components/about";
import {Footer} from "~/components/footer";
import {HeroSection} from "~/components/hero";
import {Navbar} from "~/components/navbar";
import {SponsorsSection} from "~/components/sponsors";

export default function HomePage() {
    return (
        <div id="top" className="flex min-h-screen flex-col bg-neutral-100">
            <Navbar nav_links={[
                {label: "SACC 2025", href: "#event"},
                {label: "Sponsors", href: "#sponsors"},
                {label: "About Us", href: "#about"}
            ]}/>
            <main className="flex flex-1 flex-col">
                <HeroSection/>
                <AboutSection/>
                <SponsorsSection/>
            </main>
            <Footer/>
        </div>
    );
}
