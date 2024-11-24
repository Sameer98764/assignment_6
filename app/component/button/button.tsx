import { Roboto } from 'next/font/google'
import React from 'react'
const robot =Roboto({
    subsets: ["greek-ext"],
    weight: '100'
})

const button = () => {
  return (
    <div >
       <button className={`${robot.className} text-[16px]  bg-black text-white  rounded-md border h-[40px] w-[100px] `}>Sign Up</button>
    </div>
  )
}

export default button
