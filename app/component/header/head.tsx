import React from 'react'
import { Inter, Roboto } from "next/font/google"
import Link from 'next/link'
import Image from 'next/image'
//googlefont
const roboto =Roboto({
  subsets: ['latin'],
  weight: '100'
})
const inter=Inter({subsets:['latin']})

const header = () => {

    //dynamic Navbar
    let headitem = [{
        name: 'Home',
        id: ''
    }, {
        name: 'Courses',
        id: ''
    }, {
        name: 'Services',
        id: '',
    },{
      name: 'Achievement',
        id: '',
      
    },
    {
      name: 'About Us',
        id: '',
      
    },{
      name: 'Testimonial',
        id: '',
      
    },]
    return (
        <div className='h-[72px]   w-screen pt-10'>
          
          <div className='bg-bghead h-[44px] flex items-center justify-center m-5' >
          <ul className={` ${roboto.className}h-[44px] flex justify-center space-x-14 m-[66px]  text-black font-medium items-center text-[20px]`}>
          <h1 className={`${inter.className} font-[700] text-[25.07px]  `}> <Image src={'/image/image2.svg'} alt='icon' width={32.58} height={30.38} className=''/>Ddsgnr</h1>
            {
                headitem.map((item, i) => (
                    <li key={i}>
                       <Link href={item.id}>
                       {item.name} 
                    
                    </Link>
                    </li>

                ))
            }


            
        </ul>
        <div className='space-x-3'>
          <button className={`${roboto.className} text-[16px]  rounded-md border h-[40px] w-[100px]`}>Login</button>
          <button className={`${roboto.className} text-[16px]  bg-black text-white  rounded-md border h-[40px] w-[100px] `}>Sign Up</button>
        </div>
        </div>
        </div>
    )
}

export default header