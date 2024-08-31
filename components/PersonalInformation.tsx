import React from 'react'

const PersonalInformation = ({user} : {user : any}) => {
  return (
    <div className='flex '>
        <div className='flex flex-col w-[600px]  '>
                <div className='flex items-center gap-32'>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' > First Name</label>
                        <div>{user.first_name}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm'> Last Name</label>
                        <div>{user.last_name}</div>
                    </div>
                </div>
                <div className='flex items-center gap-32'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >Mobile Number</label>
                        <div>{user.phone}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' > Email Adress</label>
                        <div>{user.email}</div>
                    </div>
                </div>
                <div className='flex items-center'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >Date of Birth</label>
                        <div>{user?.date_of_birth ? user.date_of_birth : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >Marital Status</label>
                        <div>{user?.Marital_Status ? user.Marital_Status : 'Not given'}</div>
                    </div>
                </div>
                <div className='flex items-center'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >Gender</label>
                        <div>{user?.gender ? user.gender : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >Nationality</label>
                        <div>{user?.nationality ? user.nationality : 'Not given'}</div>
                    </div>
                </div>
                <div className='flex items-center'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >Address</label>
                        <div>{user?.address ? user.address : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >City</label>
                        <div>{user?.city ? user.city : 'Not given'}</div>
                    </div>
                </div>
                <div className='flex items-center'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >State</label>
                        <div>{user?.state ? user.state : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >Zip Code</label>
                        <div>{user?.zip_code ? user.zip_code : 'Not given'}</div>
                    </div>
                </div>
                <div className='flex items-center'>
                <div>
                        <label className=' text-[#A2A1A8] text-sm' >Work's Hours</label>
                        <div>{user?.work_hours ? user.city : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >Salary/hour</label>
                        <div>{user?.salary_hour ? user.salary_hour : 'Not given'}</div>
                    </div>
                    <div>
                        <label className=' text-[#A2A1A8] text-sm' >Total Salary</label>
                        <div>{user?.total_salary ? user.total_salary : 'Not given'}</div>
                    </div>
                </div>
        </div>
       
    </div>
  )
}

export default PersonalInformation