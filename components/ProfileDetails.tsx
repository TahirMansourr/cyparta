'use client'
import React, { useState } from 'react'
import Tabs from './Tabs'
import PersonalInformation from './PersonalInformation'
import ProfessionalInformation from './ProfessionalInformation'
import Documents from './Documents'
import AccountAccess from './AccountAccess'
import { useNavigationContext } from '@/Context'

const ProfileDetails = ({ user }: { user: any }) => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const { firstNavigator, secondNavigator } = useNavigationContext()

    return (
        <section>
            {firstNavigator === 'Employees' && secondNavigator === 'Profile' ? (
                <div className=' mt-4'>
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === 0 && <PersonalInformation user={user} />}
                    {activeTab === 1 && <ProfessionalInformation />}
                    {activeTab === 2 && <Documents />}
                    {activeTab === 3 && <AccountAccess />}
                </div>
            ) : (
                <h1 className=' flex justify-center items-center mt-12 font-bold'>
                  {`No Instructions were Provided for any other Page other than Employees > Profile`}
                </h1>
            )}
        </section>
    )
}

export default ProfileDetails
