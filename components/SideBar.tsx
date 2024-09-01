'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { PiScrollLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { TbCheckupList } from "react-icons/tb";
import { PiWallet } from "react-icons/pi";
import { usePathname, useRouter } from 'next/navigation';
import { Company_logo } from '@/Utils';
import { useNavigationContext } from '@/Context';
import { Lexend } from 'next/font/google';
import '../app/globals.css'
const lexend = Lexend({ weight: "500", subsets: ["latin"] })

const SideBar = () => {
    const pathname = usePathname()
    const [accordionState , setAccordionState] = useState<boolean>(pathname === '/' ? true : false)
    console.log("🚀 ~ SideBar ~ accordionState:", accordionState)
    const router = useRouter()
    const {firstNavigator , setFirstNavigator , setSecondNavigator} = useNavigationContext()
    

  return (
    <section className=' flex h-screen py-[20px] pl-[28px]'>
        <div className=' flex  flex-col h-full w-[300px] mx-3  border shadow-md rounded-3xl items-center'>
        <Image 
          src={Company_logo}
          alt='logo'
          width={247}
          height={158}
        />
        <div className="flex items-center gap-3 mb-10">
        <MdSpaceDashboard size={30}/>
         <p>Dashboard</p>
        </div>
        <div className='flex flex-col w-full gap-3'>
            <div className={` sideBarItem-before
            ${firstNavigator === 'Employees' ?  'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null} ${lexend.className}`}
             onClick={()=>{
                setFirstNavigator('Employees')
                setSecondNavigator('Profile')
            }}
            >
                <div className='flex items-center gap-3 px-3 pl-10 ' >
                <IoIosPeople size={30} />
                <p>Employees</p>
                </div>
                <div className=' pr-5' >
                {firstNavigator === 'Employees' ?  <FaChevronDown /> : <FaChevronRight />  }
                </div>  
            </div>
    
            <div className={`transition-all duration-200 ease-in-out hover:cursor-pointer ${firstNavigator === 'Employees' ? 'flex flex-col  gap-2 mx-auto ' : 'hidden'}`}>
                <div 
                    className={`flex items-center gap-3 ${pathname === '/' ? 'text-slate-500' : null}`}
                 onClick={()=>{
                    setSecondNavigator('Profile')
                    router.push('/')
                    }}>
                    <IoPersonOutline/> 
                    <p>Profile</p>
                </div>
                <div 
                    className='flex items-center gap-3'
                    onClick={()=>{
                        setSecondNavigator('Attendence')
                    }}
                    >
                    <BiTask/>
                     <p>Attendence</p>
                    </div>
                <div className='flex items-center gap-3' onClick={()=>{setSecondNavigator('Tasks')}}><PiScrollLight/><p>Tasks</p></div>
            </div>

            <div 
            className={`flex items-center justify-between transition-all duration-200 ease-in-out hover:cursor-pointer 
                ${firstNavigator === 'Payroll' ? 'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null}`}
                 onClick={()=>{
                    setFirstNavigator('Payroll')
                    setSecondNavigator(null)
                }}
            >
                <div className={` ${lexend.className} flex items-center gap-3 px-3 pl-10 `}>
                <CiDollar size={30} />
                <p>Payroll</p>
                </div>
                <div className=' pr-5' >
                     {firstNavigator === 'Payroll' ? <FaChevronDown/> : <FaChevronRight /> }
                </div> 
            </div>

            <div className={`flex items-center justify-between transition-all duration-200 ease-in-out hover:cursor-pointer 
            ${firstNavigator === 'Holidays' ? 'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null} ${lexend.className}` }
             onClick={()=>{
                setFirstNavigator('Holidays')
                setSecondNavigator(null)
            }}
            >
                <div className='flex items-center gap-3 px-3 pl-10 '>
                <TbCheckupList size={30}/>
                <p>Holidays</p>
                </div>
                <div className=' pr-5' >
                     {firstNavigator === 'Holidays' ?  <FaChevronDown /> : <FaChevronRight />   }
                </div>  
            </div>
    
            <div className={`flex items-center justify-between transition-all duration-200 ease-in-out hover:cursor-pointer 
            ${firstNavigator === 'Advanced Payments' ? 'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null} ${lexend.className}`} 
            onClick={()=>{
                setFirstNavigator('Advanced Payments')
                setSecondNavigator(null)
                }}>
                     <div className='flex items-center gap-3 px-3 pl-10 '>
                     <PiWallet size={30} />
                     <p>Advanced Payments</p>
                     </div>
                     <div className=' pr-5' >
                     {firstNavigator === 'Advanced Payments' ?  <FaChevronDown /> : <FaChevronRight />  }
                </div>  
            </div>

            
        </div>
        </div>
    </section>
  )
}

export default SideBar