'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { CiLock } from 'react-icons/ci'
import { IoDocumentTextOutline, IoPersonOutline } from 'react-icons/io5'
import { SlBriefcase } from 'react-icons/sl'

const Tabs = ({activeTab , setActiveTab}:{activeTab : number , setActiveTab : Dispatch<SetStateAction<number>>}) => {
    

  return (
    <div className='flex gap-2 mt-2 mb-3'>
        <div 
        className={`flex items-center gap-1 border-b-2 transition-all ease-linear duration-200 hover:cursor-pointer ${activeTab == 0 ? 'border-[#EE232F] text-[#EE232F]' : null}`}
        onClick={()=>{setActiveTab(0)}}
        >
            <IoPersonOutline/>
            <p>Personal Information</p>
        </div>
        <div 
        className={`flex items-center gap-1 border-b-2 transition-all ease-linear duration-200 hover:cursor-pointer ${activeTab == 1 ? 'border-[#EE232F] text-[#EE232F]' : null}`}
        onClick={()=>{setActiveTab(1)}}
        >
            <SlBriefcase />
            <p>Professional Information</p>
        </div>
        <div 
        className={`flex items-center gap-1 border-b-2 transition-all ease-linear duration-200 hover:cursor-pointer ${activeTab == 2 ? 'border-[#EE232F] text-[#EE232F]' : null}`}
        onClick={()=>{setActiveTab(2)}}
        >
            <IoDocumentTextOutline /> 
            <p>Documents</p>
        </div>
        <div 
        className={`flex items-center gap-1 border-b-2 transition-all ease-linear duration-200  hover:cursor-pointer ${activeTab == 3 ? 'border-[#EE232F] text-[#EE232F]' : null}`}
        onClick={()=>{setActiveTab(3)}}
        >
             <CiLock />
            <p>Account Access</p>
        </div>
       
        
    </div>
  )
}

export default Tabs