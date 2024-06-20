'use client'

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Text = () => {
    useGSAP(() => {

        gsap.fromTo('#text',
            { y: 10, duration: 1, stagger: 0.3, opacity: 0 },
            { opacity: 1, y: 0, duration: 1 }
        )
    }, [])
    return (
        <div>
            <p id='text' className='text-gray-400'>Welcome to Blue Yard</p>
        </div>
    )
}

export default Text