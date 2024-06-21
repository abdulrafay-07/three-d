import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Explore = () => {
    const [isClick, setIsClick] = useState()
    useGSAP(() => {
        gsap.from(['#text', "#text2", "#text3", "#text4"], {
            y: 10, duration: 1, delay: 0.3, stagger: 0.3, opacity: 0
        })
    }, [])
    const handleClick = ()=>{
            gsap.to(['#text', "#text2", "#text3", "#text4"], {
                y: -10, duration: 0.3,  stagger: 0.3, opacity: 0
            })
    }
    return (
        <div className='w-[90%] ml-auto'>
            <p className='text-[12px]' id='text'>INVESTING IN FOUNDERS CREATING THE</p>
            <h2 className='text-[70px] leading-[70px] font-normal' id='text2'>FABRIC OF <br /> OUR FUTURE</h2>
            <p className='mt-4 w-[30%]' id='text3' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia id quam perspiciatis vel quidem iste incidunt. Sed cum ut a soluta dolorem. Ea rerum dicta debitis. Voluptatem sint, minima sapiente asperiores fugit vel dolor temporibus voluptatum quis doloremque mollitia nemo, atque velit unde optio molestiae impedit, autem amet deserunt.</p>
            <div className='flex items-center gap-4' id='text4'>
                <p className='text-[12px] font-bold'>EXPLORE THE FUTURE</p>
                <button style={{ border: '3px solid #375DBD' }} onClick={handleClick} className=' p-3 rounded-full '>→</button>
            </div>
        </div>
    )
}

export default Explore