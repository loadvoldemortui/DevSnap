import { useEffect, useState } from "react";
import Head from "next/head";
import Intro from "@/components/homepage/Intro";

export default function Index() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30); 
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>UiXplore</title>
            </Head>
            <main className={`main-border-around ${scrolled ? "scrolled" : ""}`}>
                <Intro />
                <Intro />

            </main>
        </>
    );
}
