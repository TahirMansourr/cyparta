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

const SideBar = () => {
    const [accordionState , setAccordionState] = useState<boolean>(false)
    const [ holidayState , setHolidayState] = useState<boolean>(false)
  return (
    <section className=' flex h-screen py-[20px] pl-[28px]'>
        <div className=' flex  flex-col h-full w-[300px] mx-3  border shadow-md rounded-3xl items-center'>
        <Image 
          src={'https://s3-alpha-sig.figma.com/img/3842/b99f/e7003b653626b4899b379c517657a039?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBTSOzEn~FD9iXS-GMbwjjAm-IjFyFUdKPVsOz8vMnqBsEMauW3wPBpDO~LK-G4Hy3uk3Riiv~sqg~R6cU69KEoxhfUYH~nGF1HMBRX-4fcFoRyu7YoZ0CcT-plje1QFw6DTZcPMK24dw2iUk6dBSOxlQCfJoij4VmhX3xG4-UKa85KbQHOJ5zDnv15eUc~UBCSGDlQbFgJEsZY2gOwKjTvKtOCjH010jxw-u-Ki0truFAJ0thzXNraE0czLDrukJrxAPPyQp5zZSfs6YSH81rzlTNEZFjYrzc5XOXzz71hjIY4~rUks~IqZ780CX~nsc9mGQJrDYyUDQ4eMX4X93Q__' }
          alt='logo'
          width={247}
          height={158}
        />
        <div className="flex items-center gap-3 mb-10">
        <MdSpaceDashboard size={30}/>
         <p>Dashboard</p>
        </div>
        <div className='flex flex-col w-full gap-3'>
            <div className={`flex items-center justify-between transition-all duration-200 ease-in-out hover:cursor-pointer 
            ${accordionState ? 'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null}`}
             onClick={()=>setAccordionState(!accordionState)}
            >
                <div className='flex items-center gap-3 px-3 pl-10 '>
                <IoIosPeople size={30} />
                <p>Employees</p>
                </div>
                <div className=' pr-5' >
                     {!accordionState ?   <FaChevronRight /> : <FaChevronDown /> }
                </div>  
            </div>
    
            <div className={`transition-all duration-200 ease-in-out ${accordionState ? 'flex flex-col  gap-2 mx-auto ' : 'hidden'}`}>
                <div className='flex items-center gap-3'><IoPersonOutline/> <p>Profile</p></div>
                <div className='flex items-center gap-3'><BiTask/> <p>Attendence</p></div>
                <div className='flex items-center gap-3'><PiScrollLight/><p>Tasks</p></div>
            </div>

            <div className='flex items-center gap-3 px-3 pl-10 '>
                <CiDollar size={30} />
                <p>Payroll</p>
            </div>

            <div className={`flex items-center justify-between transition-all duration-200 ease-in-out hover:cursor-pointer 
            ${holidayState ? 'border-l-4 border-l-red-600 bg-[#F9EAEB] text-[#EE232F] py-2 rounded-r-xl': null}`}
             onClick={()=>setHolidayState(!holidayState)}
            >
                <div className='flex items-center gap-3 px-3 pl-10 '>
                <TbCheckupList size={30}/>
                <p>Holidays</p>
                </div>
                <div className=' pr-5' >
                     {!holidayState ?   <FaChevronRight /> : <FaChevronDown /> }
                </div>  
            </div>
    
            <div className='flex items-center gap-3 px-3 pl-10'>
                <PiWallet size={30} />
                <p>Advanced Payment</p>
            </div>

            
        </div>
        </div>
    </section>
  )
}

export default SideBar