'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import Navigator from './Navigator'
import UpdateProfileForm from './UpdateProfileForm'
import { Lexend } from 'next/font/google'
const lexend = Lexend({ weight: "600", subsets: ["latin"] })

interface Props {
    user: any;
    refreshToken: string | undefined;
}

const ProfileHeaderComponent = ({user , refreshToken} : Props) => {
  
    const [openForm , setOpenForm] = useState<boolean>(false)
   
  return (
    <section className='w-[924px] border-b-[1px] border-b-[#A2A1A8] pb-8'>
        <Navigator/>
        {
        openForm ?
            <UpdateProfileForm 
                onClose={() =>setOpenForm(false)}
                refreshToken={refreshToken}
                /> 
                : null
            }
        <div className={` flex justify-between items-end`}>
            <div className='flex gap-2'>
                <Image
                src={user.image}
                alt='profile picture'
                width={100}
                height={100}
                className='rounded-md'
                />
            <div className={`flex flex-col`}>
                <p className={`${lexend.className}`}>{user.first_name}{''}{user.last_name} </p>
                <div className='flex items-center gap-2'>
                    <MdOutlineMail />
                    <p>{user.email}</p>
                </div>
            </div>
            </div>
            <button className='bg-black text-white rounded-md shadow-md p-2' onClick={() => setOpenForm(true)}>
                <div className='flex items-center gap-2'>
                <CiEdit size={20} />
                <p>Edit Profile</p>
                </div>
            </button>
        </div>
    </section>
  )
}

export default ProfileHeaderComponent