import { useEffect, useState } from "react";
import Header from "@/components/common/header/header";

export default function Intro() {
    const [scrolled, setScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20); 

            if (currentScrollY > lastScrollY) {
                setShowHeader(false); 
            } else {
                setShowHeader(true); 
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
             <Header showHeader={showHeader} />
            <section className={`main-border-around ${scrolled ? "scrolled" : ""}`}>
                <section className={`flex border-home items-center justify-center flex-col h-dvh ${scrolled ? "scrolled" : ""}`}>
                    <div className="container">
                        <h1 className="text-white text-6xl font-bold text-center">
                            <p className="text-[200px] leading-none text-green-500">UI</p>
                            Xplore
                        </h1>
                    </div>
                </section>
            </section>
        </>
    );
}
