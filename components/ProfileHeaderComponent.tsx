import Image from 'next/image'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaChevronRight } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const ProfileHeaderComponent = ({user} : {user : any}) => {
  return (
    <section>
        <div className='flex items-center gap-2 mb-3'>
            <p>Employees</p>
            <FaChevronRight />
            <p>Profile</p>
        </div>
        <div className=' flex justify-between items-end'>
            <div className='flex gap-2'>
                <Image
                src={user.image}
                alt='profile picture'
                width={100}
                height={100}
                className='rounded-md'
                />
            <div className='flex flex-col'>
                <p>{user.first_name} {user.last_name} </p>
                <div className='flex items-center'>
                    <MdOutlineMail />
                    <p>{user.email}</p>
                </div>
            </div>
            </div>
            <button className='bg-black text-white rounded-md shadow-md p-2'>
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