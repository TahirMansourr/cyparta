'use client'
import { createContext, useContext, useState } from "react";

type NavigationContextType = {
    firstNavigator: FirstNavigatorType,
    secondNavigator: SecondNavigatorType,
    setFirstNavigator: React.Dispatch<React.SetStateAction<FirstNavigatorType>>,
    setSecondNavigator: React.Dispatch<React.SetStateAction<SecondNavigatorType>>
}

type FirstNavigatorType = 'Employees' | 'Payroll' | 'Holidays' | 'Advanced Payments'
type SecondNavigatorType = 'Profile' | 'Attendence' | 'Tasks' | null

const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)
export const useNavigationContext = () =>{
    return useContext(NavigationContext)
}

const NavigationProvider = ({children}: {children: React.ReactNode}) => {
    const [firstNavigator, setFirstNavigator] = useState<FirstNavigatorType>('Employees')
    console.log("🚀 ~ NavigationProvider ~ firstNavigator:", firstNavigator)
    const [secondNavigator, setSecondNavigator] = useState<SecondNavigatorType>('Profile')

    const value = {
        firstNavigator, 
        setFirstNavigator, 
        secondNavigator,
        setSecondNavigator
    }
    
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider
