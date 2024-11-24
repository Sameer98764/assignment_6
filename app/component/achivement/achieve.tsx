import { Roboto } from 'next/font/google'
import React from 'react'
const robot =Roboto({
    subsets: ["greek-ext"],
    weight: '100'
})

const achieve = () => {
  return (
    <div className=' h-[288px]'>
        <div className='main h-[264px] '>
            <div className=' pb-52'><h1 className={`${robot.className} font-[700] text-[48px] text-center`}>Our Achivements</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p></div>


        </div>
      
    </div>
  )
}

export default achieve
