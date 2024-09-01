'use client'
import { useNavigationContext } from '@/Context'
import { Lexend } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
const lexend = Lexend({ weight: "600", subsets: ["latin"] })

const Navigator = () => {
    const {firstNavigator , secondNavigator} = useNavigationContext()
    
  return (
    <div className={`${lexend.className} flex items-center gap-2 mb-3`}>

            <p>{firstNavigator}</p>
                {secondNavigator ? <FaChevronRight /> : null}
            <p>{secondNavigator}</p>
        </div>
  )
}

export default Navigator