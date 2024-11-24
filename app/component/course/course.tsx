import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const robot =Roboto({
    subsets: ["latin-ext"],
    weight: '100'
})

const course = () => {
  return (
    <div className=' h-[1049px] w-[1280px]   '>
        <div className='w-[768px] h-[109px] ml-72 mt-16 '><div className='w-[768px] h-[58px]'><h1 className={`${robot.className} font-black text-[48px]`}>Explore Courses By Category</h1></div>
        <p className={`${robot.className} font-[400px] pt-5 text-[18px] `}>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p></div>


        <div className='w-[1280px] h-[636px] pt-12 ml-9 '>
           <div className='flex space-x-5 pb-5'>
           <Link href={""}> <Image src={"/image/card1.svg"} alt='card1' width={410.67} height={132}/> </Link>
            <Link href={""}> <Image src={"/image/card2.svg"} alt='card1' width={410.67} height={132}/></Link>
            <Link href={""}> <Image src={"/image/card3.svg"} alt='card1' width={410.67} height={132}/></Link>
  </div>          <div className='flex space-x-5 pb-5'><Link href={""}> <Image src={"/image/card4.svg"} alt='card1' width={410.67} height={132}/></Link>
            <Link href={""}> <Image src={"/image/card5.svg"} alt='card1' width={410.67} height={132}/></Link>
            <Link href={""}> <Image src={"/image/card6.svg"} alt='card1' width={410.67} height={132}/></Link></div>

            <div className='flex space-x-5 pb-5'>
            <Link href={""}> <Image src={"/image/card7.svg"} alt='card1' width={410.67} height={132}/></Link>
            <Link href={""}> <Image src={"/image/card8.svg"} alt='card1' width={410.67} height={132}/></Link>
            <Link href={""}> <Image src={"/image/card9.svg"} alt='card1' width={410.67} height={132}/></Link>
</div>            
          
            

            

        </div>
      
    </div>
  )
}

export default course
