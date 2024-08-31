'use client'
import React, { useState } from 'react'
import Tabs from './Tabs'
import PersonalInformation from './PersonalInformation'
import ProfessionalInformation from './ProfessionalInformation'
import Documents from './Documents'
import AccountAccess from './AccountAccess'

const ProfileDetails = ({user} : {user : any}) => {
    const [activeTab , setActiveTab] = useState<number>(0)
  return (
    <section>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        {activeTab == 0 ? <PersonalInformation user = {user} /> :
         activeTab == 1 ? <ProfessionalInformation/> :
         activeTab == 2 ? <Documents/> : 
         activeTab == 3 ? <AccountAccess/> :
          null
        }
    </section>
  )
}

export default ProfileDetails