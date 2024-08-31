'use client'
import { handleSubmit, validate } from '@/Utils'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type UserCrediantlsType ={
    email : string,
    password : string
}

type ErrorType = {
    email?: string,
    password?: string,
    apiRes? : string    
}

const SignIn = () => {

    const [userCredentials , setUserCredentials] = useState<UserCrediantlsType>({
        email : '' ,
        password : ''  
    })
    const [errors, setErrors] = useState<ErrorType>({});
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials((prev) => ({
            ...prev,
            email: e.target.value 
        }));
    };
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials((prev) => ({
            ...prev,
            password: e.target.value 
        }));
    };

  return (
    <main className='h-screen flex items-center justify-center'>
        <section className="flex flex-col border shadow-sm bg-[#E9E9E9] w-[616px] h-[489px] rounded-lg items-center" >
            <Image 
                 src={'https://s3-alpha-sig.figma.com/img/3842/b99f/e7003b653626b4899b379c517657a039?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBTSOzEn~FD9iXS-GMbwjjAm-IjFyFUdKPVsOz8vMnqBsEMauW3wPBpDO~LK-G4Hy3uk3Riiv~sqg~R6cU69KEoxhfUYH~nGF1HMBRX-4fcFoRyu7YoZ0CcT-plje1QFw6DTZcPMK24dw2iUk6dBSOxlQCfJoij4VmhX3xG4-UKa85KbQHOJ5zDnv15eUc~UBCSGDlQbFgJEsZY2gOwKjTvKtOCjH010jxw-u-Ki0truFAJ0thzXNraE0czLDrukJrxAPPyQp5zZSfs6YSH81rzlTNEZFjYrzc5XOXzz71hjIY4~rUks~IqZ780CX~nsc9mGQJrDYyUDQ4eMX4X93Q__' }
                 width={225} 
                 height={102} 
                 alt='logo'
                 />
                 <form onSubmit={(e : React.FormEvent<HTMLFormElement>) => handleSubmit({userCredentials , setErrors , e})} className="w-full flex flex-col items-center">
                 <div className=' w-[545px] h-[96px] flex flex-col'>
                 
                 <label>Email Address</label>
                 <input 
                    value = {userCredentials?.email}
                    type='text'
                    placeholder='Enter your Email'
                    className='border  focus:outline-blue-500 py-2 rounded-lg p-1 '
                    onChange={handleEmailChange}
                    />
                     {errors.email && <span className="text-red-500">{errors.email}</span>}
                 </div>
                 <div className=' w-[545px] h-[96px] flex flex-col'>
                 <label>Password</label>
                 <div className='relative'>
                        <input
                            value={userCredentials?.password}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                            className='border w-full focus:outline-blue-500 py-2 rounded-lg p-1 pr-10'
                            onChange={handlePasswordChange}
                        />
                        <div
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    
                 </div>
                 {errors.apiRes && <span className="text-red-500 mx-auto text-lg p-2 rounded-md shadow-md mb-2 border border-red-500">{errors.apiRes}</span>}
            <button type='submit' className=' w-[445px] h-[56px] rounded-[10px] bg-black text-white shadow-sm mt-[10px]'>Login</button>
            </form>
        </section>
    </main>
  )
}

export default SignIn