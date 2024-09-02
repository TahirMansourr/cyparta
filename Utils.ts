import { Dispatch, SetStateAction } from "react";

export const validate = ({
    userCredentials  , 
    setErrors
} : {
    userCredentials : {email : string, password :string} , 
    setErrors : (errors : {})=>void
}) => {
    let valid = true;
    let errors = {} as { email?: string, password?: string };

    if (!userCredentials.email) {
        errors.email = 'Email is required';
        valid = false;
    }

    if (!userCredentials.password) {
        errors.password = 'Password is required';
        valid = false;
    }

    setErrors(errors);
    return valid;
}

export const handleSubmit = async ({
    e,
    userCredentials  , 
    setErrors,
    setLoading
} : {
    e : React.FormEvent<HTMLFormElement>,
    userCredentials : {email : string, password :string} , 
    setErrors : (errors : {})=>void ,
    setLoading : Dispatch<SetStateAction<boolean>>
})=>{
    e.preventDefault();
    setLoading(true)
    if (!validate({userCredentials , setErrors})) {
        return;
    }
    try {
        const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(userCredentials),  
        });

       if(!response.ok){
        const errorData = await response.json();
        setErrors({apiRes : errorData.detail})
        return
       }
        const data = await response.json();
        console.log("🚀 ~ data:", data)
        await fetch('/api/login' , {
            method : 'POST' ,
            body : JSON.stringify({token : data.access , refresh : data.refresh})
        })

        return {status : 200}
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }finally{
        setLoading(false)
    }
}


export const Company_logo = 'https://s3-alpha-sig.figma.com/img/3842/b99f/e7003b653626b4899b379c517657a039?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBTSOzEn~FD9iXS-GMbwjjAm-IjFyFUdKPVsOz8vMnqBsEMauW3wPBpDO~LK-G4Hy3uk3Riiv~sqg~R6cU69KEoxhfUYH~nGF1HMBRX-4fcFoRyu7YoZ0CcT-plje1QFw6DTZcPMK24dw2iUk6dBSOxlQCfJoij4VmhX3xG4-UKa85KbQHOJ5zDnv15eUc~UBCSGDlQbFgJEsZY2gOwKjTvKtOCjH010jxw-u-Ki0truFAJ0thzXNraE0czLDrukJrxAPPyQp5zZSfs6YSH81rzlTNEZFjYrzc5XOXzz71hjIY4~rUks~IqZ780CX~nsc9mGQJrDYyUDQ4eMX4X93Q__'