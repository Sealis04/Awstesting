
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
export default function Home(){
    return(
        <div>
            <Canvas 
                className='w-full h-screen bg-transparent'
                camera={{near:0.1, far:1000}}
            >
                <Suspense fallback={<div></div>}>
                    
                </Suspense>
            </Canvas>
        </div>
    )
}