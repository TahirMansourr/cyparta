import React from 'react'

const PersonalInformation = ({ user }: { user: any }) => {
  return (
    <div className='grid grid-cols-2 gap-x-4 w-[650px]'>
      <div className='flex flex-col py-2 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>First Name</label>
        <div>{user.first_name}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Last Name</label>
        <div>{user.last_name}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Mobile Number</label>
        <div>{user.phone}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Email Address</label>
        <div>{user.email}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Date of Birth</label>
        <div>{user?.date_of_birth ? user.date_of_birth : 'Not given'}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Marital Status</label>
        <div>{user?.Marital_Status ? user.Marital_Status : 'Not given'}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Gender</label>
        <div>{user?.gender ? user.gender : 'Not given'}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Nationality</label>
        <div>{user?.nationality ? user.nationality : 'Not given'}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Address</label>
        <div>{user?.address ? user.address : 'Not given'}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>City</label>
        <div>{user?.city ? user.city : 'Not given'}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>State</label>
        <div>{user?.state ? user.state : 'Not given'}</div>
      </div>
      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Zip Code</label>
        <div>{user?.zip_code ? user.zip_code : 'Not given'}</div>
      </div>

      <div className='flex flex-col py-1 border-b border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Work Hours</label>
        <div>{user?.work_hours ? user.work_hours : 'Not given'}</div>
      </div>
      <div className='flex  py-1 border-b border-gray-300 gap-x-20'>
        <div className='flex flex-col py-1  border-gray-300'>
        <label className='text-[#A2A1A8] text-sm'>Salary/hour</label>
        <div>{user?.salary_hour ? user.salary_hour : 'Not given'}</div>
        </div>
       
        <div className='flex flex-col py-1   border-gray-300'>
        <label className=' text-sm text-[#EE232F]'>Total Salary</label>
        <div>{user?.total_salary ? user.total_salary : 'Not given'}</div>
      </div>
      </div>

      
    </div>
  )
}

export default PersonalInformation
