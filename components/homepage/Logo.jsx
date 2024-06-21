'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {

    useGSAP(() => {
        gsap.fromTo("#logo",
            { y: -30, duration: 0.8, opacity: 0, },
            { y: 0, duration: 0.8, opacity: 0.8 }
        )
    }, []);

    return (
        <h1 id="logo" className="opacity-0 text-[1.7rem] leading-none font-bold text-gray-300 cursor-pointer">
            BLUE<br />YARD
        </h1>
    )
}

export default Logo;