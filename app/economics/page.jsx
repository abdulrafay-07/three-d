'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React from 'react'
import { data } from '@/public/asssets/data'
import * as THREE from 'three';
const PATH = data.economics[0].paths
console.log(PATH);
// function Tube() {
//     let points = [];
//     for (let i = 0; i < 10; i++) {
//         points.push(new THREE.Vector3 | (
//             (i - 5) * 2, Math.sin(i * 0.2) * 10 + 5, 0
//         ))
//     }
//     let curve = new THREE.CatmullRomCurve3(points)
// }
const page = () => {
    return (
        <div className='min-h-screen bg-black w-[100%] h-[100%] flex justify-center items-center'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh scale={3}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default page;