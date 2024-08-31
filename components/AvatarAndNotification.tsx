import Image from 'next/image';
import React from 'react'
import { FaRegBell } from "react-icons/fa";


const AvatarAndNotification = ({image} : {image : string}) => {
  return (
    <div className='flex items-center justify-end gap-4 w-full '>
        <div className=' flex items-center justify-center rounded-md p-3 bg-[#dad9e0]'>
         <FaRegBell />
        </div>
        
        <Image
            src={image}
            alt='avatar'
            width={60}
            height={60}
            className=' rounded-full '
            />
    </div>
  )
}

export default AvatarAndNotification