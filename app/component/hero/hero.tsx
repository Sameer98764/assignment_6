import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
const robot=Roboto({
    subsets: ['latin-ext'],
    weight: '100'
})

const hero = () => {
  return (
    <div><div className='w-[1280px]  h-[800px] flex  justify-end  items-end'>
    {/* text */}
    <div>
        <div className='h-[239px]  w-[580px] mb-60'><h1 className={`${robot.className} font-[700] text-[56px]`}>Learn new skills online with ease</h1>
        <p className={`${robot.className} text-black font-[400] text-[18px]`}>Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors. </p>
        <div className='space-x-3 pt-20'>
      <button className={`${robot.className} text-[16px]  text-white rounded-md border h-[48px] bg-black w-[100px]`}>Start Learn</button>
      <button className={`${robot.className} text-[16px]   rounded-md border h-[48px] w-[120px] `}>Explore course</button>
    </div>
        </div>
    </div>
    {/* image */}
    <div className='h-[720px]'>
<Image src={'/image/image1.svg'} alt='Hero' height={390} width={428}/>
    </div>
  

</div>
<div className='h-[228px] w-[1350x] bg-[#F7F7F7] flex  space-x-12 items-center justify-center '>
         <div className={`${robot.className}  font-[700] text-[24px] h-[68px] w-[320px] `}>Trusted by 2000+ companies worldwide.</div>
      <div>
      <div className=' w-[880] h-[56] flex space-x-7 '><Image src={'/image/logo1.svg'} alt={'logo1'} height={38.52} width={123.8}/>
       <Image src={'/image/logo2.svg'} alt={'logo1'} height={38.52} width={123.8}/>
       <Image src={'/image/logo3.svg'} alt={'logo1'} height={38.52} width={123.8}/>
       <Image src={'/image/logo4.svg'} alt={'logo1'} height={38.52} width={123.8}/>
       <Image src={'/image/logo5.svg'} alt={'logo1'} height={38.52} width={123.8}/>
       <Image src={'/image/logo6.svg'} alt={'logo1'} height={38.52} width={123.8}/></div>
       
       
       </div>
       
      </div>
           
      

        
       
</div>
  )
}

export default hero