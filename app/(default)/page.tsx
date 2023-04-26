export const metadata = {
    title: "Home - Schoogle",
    description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Header from "@/components/ui/header";

export default async function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Zigzag />
            <Testimonials />
            <Newsletter />
        </>
    );
}
