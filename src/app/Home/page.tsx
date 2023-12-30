
import { Suspense } from 'react'
export default function Home(){
    return(
        <div>
            <Suspense fallback={<div></div>}>    
            </Suspense>
        </div>
    )
}