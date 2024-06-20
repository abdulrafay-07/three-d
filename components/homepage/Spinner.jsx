'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Spinner = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useGSAP(() => {
        gsap.fromTo("#spinner",
            { scale: 0.8, opacity: 0 },
            { scale: 1.2, duration: 1, delay: 0.2, opacity: 1 }
        )
    }, []);

    const handleMouseEnter = () => {
        gsap.to("#spinner", {
            scale: 1.08,
            duration: 1,
            opacity: 0.6,
        })
    };

    const handleMouseLeave = () => {
        gsap.to("#spinner", {
            scale: 1.2,
            duration: 1,
            opacity: 0.6,
        })
    };

    useEffect(() => {
        const updateProgress = (value) => {
            setProgress(value.toFixed(0));
        };

        gsap.to({ progress: 0 }, {
            progress: 100,
            delay: 0.5,
            duration: 3.5,
            onUpdate: function() {
                updateProgress(this.targets()[0].progress);
            }
        }).then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div 
            id="spinner"
            className="scale-[0.8] opacity-0"
            onMouseEnter={!isLoading ? handleMouseEnter : null}
            onMouseLeave={!isLoading ? handleMouseLeave : null}
        >
            <div
                className={`p-[2px] border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] ${!isLoading ? "hover:border-blue-800 transition duration-700" : ""} text-gray-400`}
            >
                <div
                    className={`p-[2px] border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] ${!isLoading ? "hover:border-blue-800 transition duration-700" : ""}`}
                >
                    <button
                        className={`px-20 ${isLoading ? "py-20" : "py-[5.5rem] hover:border-blue-700 transition duration-700"} border-[1.5px] border-blue-300 border-opacity-35 rounded-[50%]`}
                        disabled={isLoading}
                    >
                        {`${isLoading ? progress + "%" : "BEGIN"}`}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Spinner;