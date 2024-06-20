'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Logo = () => {

    useGSAP(() => {
        gsap.from("#logo", {
            y: -30,
            duration: 0.8,
            opacity: 0.2,
        })
    }, [])

    return (
        <h1 id="logo" className="text-[1.7rem] leading-none font-bold text-gray-400">
            BLUE<br />YARD
        </h1>
    )
}

export default Logo;