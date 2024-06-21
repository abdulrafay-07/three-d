'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Text = () => {
    useGSAP(() => {
        // const tl = gsap.timeline();
        // gsap.to
        gsap.from(['#text', "#text2"], {
            y: 10, duration: 1, delay:0.3, stagger:0.3, opacity:0
        })
        // },{
        //     opacity:1, y:0, duration:1
        // })
    }, [])
    return (
        <div>
            <p id='text' className='text-gray-400 text-center'>THIS WEBSITE USES AUDIO TO ENHANCE <br /> <span id='text2'> YOUR EXPERIENCE</span></p>
        </div>
    )
}

export default Text