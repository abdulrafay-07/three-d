'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Spinner = () => {

    useGSAP(() => {
        gsap.fromTo("#spinner",
            { scale: 0.8, opacity: 0 },
            { scale: 1.2, duration: 1, delay: 0.2, opacity: 1 }
        )
    }, [])

    const handleMouseEnter = () => {
        gsap.to("#spinner", {
            scale: 1.08,
            duration: 1,
        })
    }

    const handleMouseLeave = () => {
        gsap.to("#spinner", {
            scale: 1.2,
            duration: 1,
        })
    }

    return (
        <div 
            id="spinner"
            className="scale-[0.8] opacity-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="p-[2px] border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] hover:border-blue-600 transition duration-700">
                <button className="px-20 py-[5.5rem] border-[1.5px] border-blue-300 border-opacity-35 rounded-[50%] hover:border-blue-700 transition duration-700">
                    BEGIN
                </button>
            </div>
        </div>
    )
}

export default Spinner;