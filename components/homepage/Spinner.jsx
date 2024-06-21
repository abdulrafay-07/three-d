'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Spinner = ({ handleClick }) => {
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
            duration: 2.5,
            onUpdate: function() {
                updateProgress(this.targets()[0].progress);
            }
        }).then(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <div 
            id="spinner"
            className="scale-[0.8] opacity-0 h-64 grid place-items-center py-20"
            onMouseEnter={!isLoading ? handleMouseEnter : null}
            onMouseLeave={!isLoading ? handleMouseLeave : null}
        >
            <div
                className={`border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] transition-all duration-1000 ${!isLoading ? "hover:border-blue-700 hover:border-opacity-75 p-[2px]" : "p-0"} text-gray-400`}
            >
                <div
                    className={`border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] transition-all duration-1000 ${!isLoading ? "hover:border-blue-700 hover:border-opacity-65 p-[2px]" : "p-0"} text-gray-400`}
                >
                    <div
                        className={`p-1 border-[1.5px] border-blue-400 border-opacity-35 rounded-[50%] ${!isLoading ? "hover:border-blue-600 duration-1000 hover:border-opacity-55" : ""}`}
                    >
                        <button
                            className={`px-16 ${isLoading ? "py-[4.75rem]" : "py-[4.75rem] "} `}
                            disabled={isLoading}
                            onClick={handleClick}
                        >
                            <p className="text-sm w-12 h-4 grid place-items-center">
                                {`${isLoading ? progress + "%" : "BEGIN"}`}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;